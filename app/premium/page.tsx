"use client";

import { createOrder, createSubscriptionOrder } from "@/actions/payment";
import { load } from "@cashfreepayments/cashfree-js";
import { Award, Check, Crown, Loader2, Sparkles, Zap } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function PremiumPage() {
  const [isPending, startTransition] = useTransition();
  const plans = [
    {
      id: "e1b6aef5-201b-4fec-944d-033b8a85eee9",
      name: "Starter",
      price: "₹99",
      icon: Zap,
      description: "Generate 10 images",
      features: [
        "10 image generations",
        "One-time purchase",
        "Lifetime access to generated images",
        "Standard quality",
      ],
      isSubscription: false,
      billing: "one-time",
      planType: "oneTime",
    },
    {
      id: "9850cfd1-e0f8-4946-a04d-4eab5f8bccfa",
      name: "Monthly",
      price: "₹299",
      icon: Sparkles,
      description: "Unlimited images per month",
      features: [
        "Unlimited image generations",
        "Auto-renews monthly",
        "Cancel anytime",
        "High quality output",
      ],
      isSubscription: true,
      billing: "/month",
      planType: "subscription",
    },
    {
      id: "547adc4a-714d-4855-b455-62c6707d05ac",
      name: "Six Months",
      price: "₹2,199",
      icon: Crown,
      description: "Unlimited images for 6 months",
      features: [
        "Unlimited image generations",
        "6 months of access",
        "Save 12% vs monthly",
        "High quality output",
      ],
      isSubscription: true,
      billing: "/6 months",
      recommended: true,
      planType: "subscription",
    },
    {
      id: "69acbe7c-44f8-466f-995c-58279ea993b8",
      name: "Annual",
      price: "₹4,199",
      icon: Award,
      description: "Unlimited images for 12 months",
      features: [
        "Unlimited image generations",
        "12 months of access",
        "Save 30% vs monthly",
        "High quality output",
      ],
      isSubscription: true,
      billing: "/year",
      planType: "subscription",
    },
  ];

  let cashfree: any;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: process.env.NEXT_PUBLIC_CASHFREE_MODE as "production" | "sandbox",
    });
  };
  initializeSDK();


  const handlePayment = async (planId: string, planType: string) => {
    try {

      startTransition(async () => {
        const response = planType === 'oneTime' ? await createOrder(planId) : await createSubscriptionOrder(planId);

        if (!response.success || !response.data) {
          throw new Error("Failed to initiate payment");
        }

        if (!cashfree) {
          throw new Error("Failed to load Cashfree SDK");
        }

        if (planType === 'oneTime') {
          const { payment_session_id } = response.data

          if (!payment_session_id) {
            throw new Error("Payment Session id is missing ")
          }
          const checkoutOptions = {
            paymentSessionId: payment_session_id,
            redirectTarget: "_self",
          };
          cashfree.checkout(checkoutOptions);
        } else if (planType === 'subscription') {
          const { subscription_session_id } = response.data

          if (!subscription_session_id) {
            throw new Error("subscription Session id is missing ")
          }

          const checkoutOptions = {
            subsSessionId: subscription_session_id,
            redirectTarget: "_self",
          };
          cashfree.subscriptionsCheckout(checkoutOptions);
        } else {
          throw new Error("Send a valid Plans Type")
        }

      });
    } catch (error) {
      console.error("Error confirming order:", error);
      toast.error("Payment verification failed. Please contact support.", {
        id: "payment",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-[#14c8eb]">Level Up?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unlock the full potential of AI-driven interior design. Choose a plan that fits your vision and start creating today.
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white border transition-all duration-500 hover:-translate-y-2 ${plan.recommended
                  ? "border-[#14c8eb] shadow-[0_20px_50px_-12px_rgba(20,200,235,0.2)] scale-105 z-10"
                  : "border-gray-100 hover:shadow-2xl"
                  }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#14c8eb] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  {/* Icon & Name */}
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${plan.recommended ? "bg-[#14c8eb]/10" : "bg-gray-50"}`}>
                    <Icon className={`w-7 h-7 ${plan.recommended ? "text-[#14c8eb]" : "text-gray-400"}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {plan.billing}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-green-50">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePayment(plan.id, plan.planType)}
                  disabled={isPending}
                  className={`group relative w-full py-4 rounded-2xl font-bold text-base overflow-hidden transition-all duration-300 cursor-pointer text-center flex justify-center items-center ${plan.recommended
                    ? "bg-[#14c8eb] text-black hover:shadow-[0_0_20px_rgba(20,200,235,0.4)]"
                    : "bg-foreground text-white hover:bg-black"
                    }`}
                >
                  <span className="relative z-10">Get Started</span>

                  {plan.recommended && (
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Questions? We've got answers.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-bold text-foreground mb-2 text-lg">
                Can I upgrade my plan anytime?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Absolutely! You can upgrade to a higher plan at any time through your dashboard. The difference will be automatically prorated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-bold text-foreground mb-2 text-lg">
                Is there a free trial?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We offer a Starter plan for just ₹99 which gives you full access to all features for your first 10 generations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-bold text-foreground mb-2 text-lg">
                What about billing cycles?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Subscriptions renew automatically. You can manage your billing cycle and view invoices directly in your profile settings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-bold text-foreground mb-2 text-lg">
                Do you offer refunds?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide a 7-day money-back guarantee for our subscription plans if you're not completely satisfied with the results.
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

