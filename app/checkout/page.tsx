"use client";
import { Footer } from "@/components/boty/footer";
import { Header } from "@/components/boty/header";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  Truck,
  Wallet,
  Landmark,
  CreditCard,
  ShoppingBag,
  BadgeAlert,
} from "lucide-react";
import { useCart } from "@/components/boty/cart-context";
import { formatPrice } from "@/lib/utils";

// import { OrderSummarySidebar } from "@/components/boty/order-summary-sidebar"

export type PaymentMethod = "COD" | "JazzCash" | "Easypaisa" | "DebitCard";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("COD");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.address.trim())
      errors.address = "Complete shipping address is required";
    if (!formData.city.trim()) errors.city = "City is required";

    const phoneRegex = /^((\+92)|(92)|(0))?3\d{2}\d{7}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ""))) {
      errors.phone =
        "Enter a valid Pakistani mobile number (e.g., 03001234567)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      errors.email = "Enter a valid email address";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const payload = {
      customer: formData,
      items: items.map((i) => ({
        id: i.id,
        name: i.name,
        description: i.description,
        price: i.price,
        quantity: i.quantity,
      })),
      paymentMethod,
      subtotal,
      total: subtotal,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        clearCart();
        router.push("/checkout/success");
      } else {
        throw new Error("Order creation failure");
      }
    } catch {
      alert(
        "System could not dispatch order logs. Please review parameters or use WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <section className="px-6 py-44 text-center mx-auto max-w-xl animate-blur-in flex-1 flex flex-col justify-center items-center">
          <div className="h-16 w-16 bg-card rounded-full flex items-center justify-center text-muted-foreground/80 mb-6">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-4xl mb-4 tracking-tight">
            Your cart is empty
          </h1>
          <p className="text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
            There are no operational pieces inside your selection tray to check
            out.
          </p>
          <Link
            href="/collections/all"
            className="rounded-full bg-primary px-8 py-4 text-xs font-semibold text-primary-foreground tracking-[0.2em] uppercase transition hover:opacity-90 hira-shadow"
          >
            Explore Collections
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background antialiased">
      <Header />
      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl animate-blur-in">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Link
              href="/cart"
              className="hover:text-foreground inline-flex items-center gap-1.5 group transition"
            >
              <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />{" "}
              Back to selection tray
            </Link>
          </nav>

          <header className="mb-12 border-b border-border/40 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
                House of Hira Mani
              </p>
              <h1 className="mt-3 font-serif text-5xl md:text-6xl tracking-tight leading-none">
                Checkout
              </h1>
            </div>
          </header>

          <form
            onSubmit={handleSubmit}
            className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"
          >
            {/* Shipping & Payment Fields */}
            <div className="space-y-8">
              {/* Shipping Information Card */}
              <div className="rounded-[2rem] bg-card p-6 sm:p-10 border border-border/20 hira-shadow">
                <h2 className="font-serif text-2xl tracking-tight mb-8">
                  Shipping Destination
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      First Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.firstName ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.firstName && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" />{" "}
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      Last Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.lastName ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.lastName && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" />{" "}
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.email ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" />{" "}
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      Mobile Number (For Courier Updates) *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g., 03001234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.phone ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" />{" "}
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      Complete Street Address *
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      placeholder="House number, street address, locality"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.address ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.address && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" />{" "}
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      City *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder="e.g., Islamabad"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition ${formErrors.city ? "border-destructive ring-1 ring-destructive" : "border-border/80"}`}
                    />
                    {formErrors.city && (
                      <p className="text-[11px] text-destructive mt-1.5 flex items-center gap-1">
                        <BadgeAlert className="h-3.5 w-3.5" /> {formErrors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="e.g., 44000"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-border/80 bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary hira-transition"
                    />
                  </div>
                </div>
              </div>

              {/* Local Payment Selection Grid */}
              <div className="rounded-[2rem] bg-card p-6 sm:p-10 border border-border/20 hira-shadow">
                <h2 className="font-serif text-2xl tracking-tight mb-2">
                  Payment Option
                </h2>
                <p className="text-xs text-muted-foreground mb-8">
                  Select your preferred local payment method.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label
                    className={`flex items-start gap-4 rounded-2xl border p-5 cursor-pointer hira-transition bg-background ${paymentMethod === "COD" ? "border-primary ring-1 ring-primary" : "border-border/60 hover:border-accent"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "COD"}
                      onChange={() => setPaymentMethod("COD")}
                      className="sr-only"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-semibold tracking-wide block">
                        Cash on Delivery (COD)
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Pay in cash directly upon doorstep arrival.
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-start gap-4 rounded-2xl border p-5 cursor-pointer hira-transition bg-background ${paymentMethod === "JazzCash" ? "border-primary ring-1 ring-primary" : "border-border/60 hover:border-accent"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "JazzCash"}
                      onChange={() => setPaymentMethod("JazzCash")}
                      className="sr-only"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mt-0.5">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-semibold tracking-wide block">
                        JazzCash
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Settle invoice securely from your JazzCash wallet
                        account.
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-start gap-4 rounded-2xl border p-5 cursor-pointer hira-transition bg-background ${paymentMethod === "Easypaisa" ? "border-primary ring-1 ring-primary" : "border-border/60 hover:border-accent"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "Easypaisa"}
                      onChange={() => setPaymentMethod("Easypaisa")}
                      className="sr-only"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 mt-0.5">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-semibold tracking-wide block">
                        Easypaisa
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Authorize payments directly using your mobile Easypaisa
                        application.
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-start gap-4 rounded-2xl border p-5 cursor-pointer hira-transition bg-background ${paymentMethod === "DebitCard" ? "border-primary ring-1 ring-primary" : "border-border/60 hover:border-accent"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "DebitCard"}
                      onChange={() => setPaymentMethod("DebitCard")}
                      className="sr-only"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-semibold tracking-wide block">
                        Debit / Credit Card
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Pay using local Visa, Mastercard, or PayPak card
                        profiles.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Content Sidebar Summary Panel */}
            <aside className="rounded-[2rem] bg-card p-6 sm:p-10 border border-border/20 hira-shadow lg:sticky lg:top-32 space-y-6">
              <h2 className="font-serif text-2xl tracking-tight border-b border-border/40 pb-4">
                Order Summary
              </h2>

              {/* Dynamic Product Item Scrollable Feed */}
              <div className="divide-y divide-border/40 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="w-16 h-20 shrink-0 overflow-hidden rounded-xl bg-background border border-border/30">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-serif text-md truncate leading-tight text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-xs mt-1">
                        <span className="text-muted-foreground">
                          Quantity: {item.quantity}
                        </span>
                        <span className="font-medium text-foreground/90">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Invoice Pricing Tallies */}
              <div className="space-y-3.5 text-sm border-t border-border/40 pt-6">
                <div className="flex justify-between text-muted-foreground">
                  <span className="tracking-wide">Subtotal</span>
                  <span className="font-medium text-foreground/90">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span className="tracking-wide">
                    Shipping Across Pakistan
                  </span>
                  <span className="text-primary font-semibold uppercase text-[10px] tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                    Free
                  </span>
                </div>
                <div className="flex justify-between border-t border-border/40 pt-4 text-base font-medium">
                  <span className="font-serif text-lg tracking-tight">
                    Total Payable
                  </span>
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              {/* Encrypted Registry Alert Widget */}
              <div className="rounded-xl bg-background/50 border border-border/40 p-4 flex gap-3 text-xs text-muted-foreground leading-relaxed">
                <svg
                  className="h-4 w-4 text-primary shrink-0 mt-0.5"
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  Orders compile directly onto our custom local database
                  registry. Shipping parameters update dynamically as
                  verification finishes.
                </p>
              </div>

              {/* Order Processing Submission Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary px-7 py-4 text-center text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground shadow-sm hover:opacity-95 disabled:opacity-50 hira-transition cursor-pointer"
              >
                {isSubmitting
                  ? "Placing Order..."
                  : `Confirm Order · ${formatPrice(subtotal)}`}
              </button>

              {/* Security Seal */}
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground pt-2">
                <svg
                  className="h-4 w-4 text-primary"
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                End-To-End Encrypted Registry
              </div>
            </aside>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
