import { BASE_URL } from "./userServices";

export async function fetchComments(postId: string) {
  try {
    const res = fetch(`${BASE_URL}/comments/${postId}`);
    const data = (await res).json();
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
}

export async function postComment(
  message: string,
  postId: string,
  parent?: string
) {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message, postId, parent }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
}
