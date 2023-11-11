export const BASE_URL = "http://localhost:3000/api";

export async function fetchUser() {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
}
