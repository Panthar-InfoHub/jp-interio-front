"use server";
import { API_URL } from "@/lib/apiUtil";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function createOrder(planId: string) {
  const session = await auth();
  if (!session) {
    redirect("/signup");
  }
  try {

    const orderResponse = await fetch(`${API_URL}/payment/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${session.apiToken}`,
      },
      body: JSON.stringify({
        plan_id: planId,
      }),
    });

    const response = await orderResponse.json();
    console.debug("Create Order response:", response);

    return response;
  } catch (error) {
    console.error("Create order error:", error);

    return {
      success: false,
      message: "Order creation failed",
    };
  }
}


export async function createSubscriptionOrder(planId: string) {
  try {

    const session = await auth();
    if (!session) {
      redirect("/signup");
    }

    const orderResponse = await fetch(`${API_URL}/payment/create-subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${session.apiToken}`,
      },
      body: JSON.stringify({
        plan_id: planId,
      }),
    });

    const response = await orderResponse.json();
    console.debug("Create Subscription order response:", response);

    return response;
  } catch (error: any) {
    console.error("Create Subscription order error:", error.response);
    return {
      success: false,
      message: "Subscription order creation failed",
    };
  }
}