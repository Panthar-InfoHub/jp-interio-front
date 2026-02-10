"use server"

import { API_URL } from "@/lib/apiUtil"
import { auth } from "@/lib/auth";

export async function getUserById() {
    const session = await auth();
    if (!session || !session.userId || !session.apiToken) {
        throw new Error("Unauthorized")
    }
    const res = await fetch(`${API_URL}/user/${session?.userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.apiToken}`
        },
        cache: "no-store",
    })
    if (!res.ok) {
        const errorText = await res.text();
        console.error("API ERROR:", res.status, errorText);
        throw new Error(`Failed to fetch user: ${res.status}`);
    }

    const response = await res.json()

    return response
}