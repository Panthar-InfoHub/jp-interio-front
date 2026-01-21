"use client";

import { Check } from "lucide-react";
import { createOrder } from "@/actions/payment";
import { load } from "@cashfreepayments/cashfree-js";
import { toast } from "sonner";
// import Header from '@/components/header'
// import Footer from '@/components/footer'

export default function PremiumPage() {
  const plans = [
    {
      id: "e1b6aef5-201b-4fec-944d-033b8a85eee9",
      name: "Starter",
      price: "₹99",
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
      mode: "sandbox",
    });
  };
  initializeSDK();

    
  const handlePayment = async (planId: string, planType: string) => {
    try {
      const response = await createOrder(planId);

      if (!response.success || !response.data) {
        throw new Error("Failed to initiate payment");
      }

      if (!cashfree ) {
        throw new Error("Failed to load Cashfree SDK");
      }

      if (planType === 'oneTime') {
        const {paymentSessionId } = response.data

        if(!paymentSessionId){
        throw new Error("Payment Session id is missing ")
       }
       const  checkoutOptions = {
            paymentSessionId: paymentSessionId,
            redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
      } else if(planType === 'subscription'){
        const {subsSessionId } = response.data

        if(!subsSessionId){
        throw new Error("subscription Session id is missing ")
       }

       const  checkoutOptions = {
            subsSessionId: subsSessionId,
            redirectTarget: "_self",
        };
        cashfree.subscriptionsCheckout(checkoutOptions);
      }else {
        throw new Error("Send a valid Plans Type")
      }
    } catch (error) {
      console.error("Error confirming order:", error);
            toast.error("Payment verification failed. Please contact support.", {
              id: "payment",
            });
            console.log("success")
    }
    // Payment handler - integrate with Stripe or payment gateway
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Header /> */}

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to unlock unlimited creativity with
            SPZAORA's AI image generation
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border transition-all duration-200 ${
                plan.recommended
                  ? "border-[#14c8eb] bg-white shadow-lg scale-105"
                  : "border-border bg-white hover:shadow-md"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#14c8eb] text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-5 flex flex-col h-full">
                {/* Plan Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {plan.billing}
                    </span>
                  </div>

                  {/* Plan Type Badge */}
                  <div className="mb-3">
                    {plan.isSubscription ? (
                      <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs font-medium">
                        Subscription
                      </span>
                    ) : (
                      <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-medium">
                        One-time Payment
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-4 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#14c8eb] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePayment(plan.id, plan.planType)}
                  className={`w-full py-2 rounded font-semibold text-sm transition-all duration-200 ${
                    plan.recommended
                      ? "bg-[#14c8eb] text-black hover:opacity-90"
                      : "bg-foreground text-white hover:opacity-90 border border-foreground"
                  }`}
                >
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-4 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                Can I upgrade my plan anytime?
              </h3>
              <p className="text-muted-foreground text-xs">
                Yes! You can upgrade to a higher plan at any time. The
                difference will be prorated to your current billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                Is there a free trial?
              </h3>
              <p className="text-muted-foreground text-xs">
                You can start with our Starter plan for just ₹99 to test the
                service with 10 image generations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                What happens when my subscription expires?
              </h3>
              <p className="text-muted-foreground text-xs">
                Your subscription will automatically renew. You can cancel
                anytime from your account settings before renewal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                Do you offer refunds?
              </h3>
              <p className="text-muted-foreground text-xs">
                We offer a 7-day money-back guarantee for subscription plans.
                One-time purchases are non-refundable.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
