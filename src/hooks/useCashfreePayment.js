import { load } from "@cashfreepayments/cashfree-js";

export const useCashfreePayment = () => {

  const openPayment = async ({ sessionId, onSuccess, onFailure }) => {

    const cashfree = await load({
      mode: "sandbox"
    });

    let checkoutOptions = {
      paymentSessionId: sessionId,
      redirectTarget: "_modal",
    };

    cashfree.checkout(checkoutOptions)
      .then(onSuccess)
      .catch(onFailure);
  };

  return { openPayment };
};
