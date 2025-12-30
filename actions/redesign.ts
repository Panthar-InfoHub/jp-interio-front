"use server"
import axios from "axios"

const API_URL = process.env.BACKEND_API_URL || "http://localhost:8080/api/v1"
export async function redesignImage({ image_uri, stylePrompt }: { image_uri: string; stylePrompt?: string }) {
  try {

    if (!image_uri) {
      return {
        success: false,
        message: "Missing Image url",
      }
    }

    // Call backend API
    const res = await axios.post(`${API_URL}/ai/redesign-room`, { image_uri, stylePrompt })

    const data = res.data
    console.debug("Redesign API response:", data)
    return {
      success: true,
      data
    }
  } catch (error: any) {
    console.error("Error in redesignImage:", error?.response.data)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to redesign image",
    }
  }
}
