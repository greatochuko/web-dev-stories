import { BASE_URL } from "./userServices";

export async function login(email: string, password: string) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    console.log(err);

    return err;
  }
}
