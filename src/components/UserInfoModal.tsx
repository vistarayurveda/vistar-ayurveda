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
  DialogClose,
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
  email: string;
  address: string;
  paymentMethod: "online" | "cod";
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  paymentMethod: "online",
};

const UserInfoModal = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false); // ✅ Success dialog state
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
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
          email: form.email,
          address: form.address,
          paymentMethod: form.paymentMethod,
          amount: 1299,
          status,
        }),
      });
      const data = await res.json();
      return data;
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
          email: form.email,
          contact: form.phone,
          onSuccess: async () => {
            const response = await storeOrder("PAID");
            if (response.success) {
              setSuccessOpen(true);
            }
            resetForm();
            setIsSubmitting(false);
          },
          onFailure: () => {
            setIsSubmitting(false);
          },
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
      {/* User Info Form Dialog */}
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
              Please fill in your details below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Name */}
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="outline-none ring-none focus-visible:ring-transparent"
              />
              {errors.name && (
                <span className="text-sm text-destructive">{errors.name}</span>
              )}
            </div>

            {/* Phone */}
            <div className="grid gap-1">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="focus-visible:ring-transparent"
              />
              {errors.phone && (
                <span className="text-sm text-destructive">{errors.phone}</span>
              )}
            </div>

            {/* Email */}
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="focus-visible:ring-transparent"
              />
              {errors.email && (
                <span className="text-sm text-destructive">{errors.email}</span>
              )}
            </div>

            {/* Address */}
            <div className="grid gap-1">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter your address"
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

            {/* Payment Method */}
            <div className="grid gap-2">
              <Label>Payment Method</Label>
              <RadioGroup
                value={form.paymentMethod}
                onValueChange={(value: "online" | "cod") =>
                  handleChange("paymentMethod", value)
                }
                className="grid lg:grid-cols-2 gap-4"
              >
                <label
                  htmlFor="online"
                  className={cn(
                    "cursor-pointer border rounded-lg p-2 flex items-start space-x-2 transition",
                    form.paymentMethod === "online"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary"
                  )}
                >
                  <RadioGroupItem
                    value="online"
                    id="online"
                    className="h-4 w-4 mt-1 accent-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">
                      Online Payment
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Pay securely using UPI, cards, or netbanking
                    </span>
                  </div>
                </label>

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

          <div className="flex flex-col gap-2">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="m-0 text-white flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}

      <Dialog
        open={successOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setIsSubmitting(false);
          }
          setSuccessOpen(isOpen);
        }}
      >
        <DialogContent className="sm:max-w-sm p-6">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Title */}
            <DialogTitle className="text-xl font-semibold text-foreground">
              Order Placed Successfully 🎉
            </DialogTitle>

            {/* Description */}
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              Thank you for your order.
              <br />
              We’ll contact you shortly with confirmation details.
            </DialogDescription>

            {/* Action Button */}
            <Button
              className="mt-2 w-full rounded-lg"
              onClick={() => setSuccessOpen(false)}
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserInfoModal;
