import { BASE_URL } from "./userServices";

export async function subscribeToNewsLetter(email: string) {
  try {
    const res = await fetch(`${BASE_URL}/newsletter`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
}
