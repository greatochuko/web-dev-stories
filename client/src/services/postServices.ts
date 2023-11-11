import { BASE_URL } from "./userServices";

export async function fetchPosts() {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;
    return { error: err.message };
  }
}

export async function fetchPost(postId: string) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${postId}`);
    const data = await res.json();

    return data;
  } catch (e) {
    const err = e as Error;

    return { error: err.message };
  }
}
