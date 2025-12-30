import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { secret, name, phone, email, address, paymentMethod, amount, status } = req.body;

  if (secret !== process.env.SHEETS_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Proxy request to your Google Apps Script Web App
    const sheetsUrl = process.env.SHEETS_URL;
    const response = await fetch(sheetsUrl!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, name, phone, email, address, paymentMethod, amount, status }),
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
