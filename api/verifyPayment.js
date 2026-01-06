import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { orderId } = req.body;

    const response = await axios.get(
      `https://sandbox.cashfree.com/pg/orders/${orderId}/payments`,
      {
        headers: {
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY
        }
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    return res.status(500).json({
      message: "Payment verification failed",
      error: error.response?.data || error.message
    });
  }
}
