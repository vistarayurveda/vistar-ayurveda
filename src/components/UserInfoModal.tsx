"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRazorpayPayment } from "@/hooks/useRazorpayPayment";
import { Loader2 } from "lucide-react";

type Props = {
  children: ReactNode;
};

type FormState = {
  name: string;
  phone: string;
  address: string;
  landmark?: string;
  pincode?: string;
  paymentMethod: "online" | "cod";
};

type FormErrors = {
  name?: string;
  phone?: string;
  address?: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  address: "",
  landmark: "",
  pincode: "",
  paymentMethod: "cod",
};

const UserInfoModal = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const { openPayment } = useRazorpayPayment();
  const SHEETS_SECRET = import.meta.env.VITE_SHEETS_SECRET;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setForm(initialFormState);
    setErrors({});
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const storeOrder = async (status: "PAID" | "PENDING") => {
    try {
      const res = await fetch("/api/store-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: SHEETS_SECRET,
          name: form.name,
          phone: form.phone,
          address: form.address,
          landmark: form.landmark || "",
          pincode: form.pincode || "",
          paymentMethod: form.paymentMethod,
          amount: "1299",
          status,
        }),
      });

      return await res.json();
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (form.paymentMethod === "online") {
        openPayment({
          amount: 129900,
          name: form.name,
          contact: form.phone,
          onSuccess: async () => {
            const response = await storeOrder("PAID");
            if (response.success) setSuccessOpen(true);
            resetForm();
            setIsSubmitting(false);
          },
          onFailure: () => setIsSubmitting(false),
        });
        setOpen(false);
      } else {
        const response = await storeOrder("PENDING");
        if (response.success) {
          setOpen(false);
          setSuccessOpen(true);
        }
        resetForm();
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* User Info Modal */}
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            resetForm();
            setIsSubmitting(false);
          }
          setOpen(isOpen);
        }}
      >
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="sm:max-w-lg gap-2">
          <DialogHeader>
            <DialogTitle>User Information</DialogTitle>
            <DialogDescription>
              Please fill in your delivery details below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Name */}
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="focus-visible:ring-transparent"
              />
              {errors.name && (
                <span className="text-sm text-destructive">{errors.name}</span>
              )}
            </div>
            {/* Phone */}
            <div className="grid gap-2">
              <Label>Phone Number</Label>
              <Input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="focus-visible:ring-transparent"
              />
              {errors.phone && (
                <span className="text-sm text-destructive">{errors.phone}</span>
              )}
            </div>
            {/* Address */}
            <div className="grid gap-2">
              <Label>Address</Label>
              <Input
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="focus-visible:ring-transparent"
              />
              {errors.address && (
                <span className="text-sm text-destructive">
                  {errors.address}
                </span>
              )}
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="grid gap-2 flex-1">
                <Label>
                  Landmark
                  <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  value={form.landmark}
                  onChange={(e) => handleChange("landmark", e.target.value)}
                  className="focus-visible:ring-transparent"
                />
              </div>

              <div className="grid gap-2 flex-1">
                <Label>
                  Pincode
                  <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  value={form.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  className="focus-visible:ring-transparent"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="grid gap-2">
              
              <Label>Payment Method</Label>
              <RadioGroup
                value={form.paymentMethod}
                onValueChange={(value: "online" | "cod") =>
                  handleChange("paymentMethod", value)
                }
                className="grid lg:grid-cols-1 gap-4"
              >
                
                {/* <label htmlFor="online" className={cn( "cursor-pointer border rounded-lg p-2 flex items-start space-x-2 transition", form.paymentMethod === "online" ? "border-primary bg-primary/10" : "border-border hover:border-primary" )} > <RadioGroupItem value="online" id="online" className="h-4 w-4 mt-1 accent-primary" /> <div className="flex flex-col"> <span className="font-medium text-foreground"> Online Payment </span> <span className="text-sm text-muted-foreground"> Pay securely using UPI, cards, or netbanking </span> </div> </label> */}
                <label
                  htmlFor="cod"
                  className={cn(
                    "cursor-pointer border rounded-lg p-2 flex items-start space-x-2 transition",
                    form.paymentMethod === "cod"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary"
                  )}
                >
                  
                  <RadioGroupItem
                    value="cod"
                    id="cod"
                    className="h-4 w-4 mt-1 accent-primary"
                  />
                  <div className="flex flex-col">
                    
                    <span className="font-medium text-foreground">
                      
                      Cash on Delivery (COD)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      
                      Pay when your order arrives at your doorstep
                    </span>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Submit Order"
            )}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-sm p-6">
          <div className="flex flex-col items-center text-center gap-4">
            <DialogTitle>Order Placed Successfully 🎉</DialogTitle>
            <DialogDescription>
              Thank you for your order. We’ll contact you shortly.
            </DialogDescription>
            <Button onClick={() => setSuccessOpen(false)} className="w-full">
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserInfoModal;
