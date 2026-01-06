import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { amount, name, phone } = req.body;

    const orderId = "order_" + Date.now();

    const payload = {
      order_id: orderId,
      order_amount: amount,
      order_currency: "INR",
      customer_details: {
        customer_id: "cust_" + Date.now(),
        customer_name: name,
        customer_phone: phone
      }
    };

    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY
        }
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    return res.status(500).json({
      message: "Cashfree order creation failed",
      error: error.response?.data || error.message
    });
  }
}
