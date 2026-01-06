import { load } from "@cashfreepayments/cashfree-js";

export const initializeCashfree = async () => {
  return await load({
    mode: "sandbox"
  });
};
