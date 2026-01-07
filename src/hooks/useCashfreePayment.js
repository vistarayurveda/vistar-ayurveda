import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";

export const useCashfreePayment = () => {

  const openPayment = async ({
    sessionId,
    orderId,
    onSuccess,
    onFailure,
  }) => {

    try {
      const cashfree = await load({ mode: "sandbox" });

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      const result = await cashfree.checkout(checkoutOptions);

      // Now verify payment
      const verifyRes = await axios.post(`/api/verifyOrder`, { orderId });

      const payments= verifyRes.data || [];
      console.log("Payment verification response:", payments);
      const isPaid = payments.some(
        (p) => p.payment_status === "SUCCESS"
      );

      isPaid
        ? onSuccess({ orderId, payments })
        : onFailure({ message: "Payment not completed" });

    } catch (err) {
      onFailure(err);
    }
  };

  return { openPayment };
};
