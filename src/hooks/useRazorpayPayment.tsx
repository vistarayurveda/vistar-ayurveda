import Logo from '@/assets/vistar-logo.jpg'

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

type RazorpayOptions = {
  amount: number;
  name: string;
  email:string;
  contact:string;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
};

const enableScroll = () => {
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
};

const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window?.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

export const useRazorpayPayment = () => {
  const openPayment = async ({
    amount,
    name,
    email,
    contact,
    onSuccess,
    onFailure,
  }: RazorpayOptions) => {
    const isLoaded = await loadRazorpay();

    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    // Ensure scroll is enabled before opening
    enableScroll();

    const options = {
      key: RAZORPAY_KEY,
      amount,
      currency: "INR",
      name:"Vistar Ayurveda",
      description:"Longjack Product",
      image: "https://i.ibb.co/4ggstbpn/vistar-logo.jpg",

      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
      },

      handler: (response: any) => {
        enableScroll();
        onSuccess?.(response);
      },

      modal: {
        ondismiss: () => {
          enableScroll();
        },
      },

      prefill: {
        name: name,
        email: email,
        contact: contact,
      },

      theme: {
        color: "#16a34a",
      },
    };

    const razorpay = new window.Razorpay(options);

    // Payment failed
    razorpay.on("payment.failed", (response: any) => {
      enableScroll();
      onFailure?.(response);
    });

    razorpay.open();

    setTimeout(enableScroll, 4000);
  };

  return { openPayment };
};
