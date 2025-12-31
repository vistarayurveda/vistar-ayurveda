import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      secret,
      name,
      phone,
      address,
      landmark = "",
      pincode = "",
      paymentMethod,
      amount,
      status,
    } = req.body;

    if (secret !== process.env.SHEETS_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const sheetsUrl = process.env.SHEETS_URL;
    if (!sheetsUrl) {
      return res.status(500).json({ error: "Sheets URL not configured" });
    }

    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        name,
        phone,
        address,
        landmark,
        pincode,
        paymentMethod,
        amount,
        status,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error: any) {
    console.error("Store order error:", error);
    return res.status(500).json({ error: error.message });
  }
}
