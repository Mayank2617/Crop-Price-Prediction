// src/api/auth.ts
const baseURL = import.meta.env.VITE_API_BASE_URL;
export const registerUser = async (userData: {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  email: string;
  profession: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${baseURL}api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const contentType = response.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text(); // capture plain text for debugging
      console.error("❌ Non-JSON response received:", text);
      throw new Error("Unexpected response from server");
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
