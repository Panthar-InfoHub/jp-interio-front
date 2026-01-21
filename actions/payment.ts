"use server";
import axios from "axios";
import { API_URL } from "@/lib/apiUtil";

export async function createOrder(planId: string) {
  try {
    const orderResponse = await fetch(`${API_URL}/payment/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: planId,
      }),
    });

    const response = await orderResponse.json();

    return response;
  } catch (error) {
    console.error("Create order error:", error);

    return {
      success: false,
      message: "Order creation failed",
    };
  }
}
