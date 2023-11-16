// export const BASE_URL = "http://localhost:3000/api";
export const BASE_URL = "https://web-dev-stories-server.onrender.com/api";

export async function fetchUser() {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchUserProfile(userId: string) {
  try {
    const res = await fetch(`${BASE_URL}/user/profile/${userId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
