import { BASE_URL } from "./userServices";

export async function fetchComments(postId: string) {
  try {
    const res = fetch(`${BASE_URL}/comments/${postId}`);
    const data = (await res).json();
    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err };
  }
}

export async function postComment(message: string, postId: string) {
  try {
    const res = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, postId }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;

    return { error: err };
  }
}
