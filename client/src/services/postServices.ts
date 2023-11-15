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

    return err;
  }
}

export async function searchPosts(query: string) {
  try {
    const res = await fetch(`${BASE_URL}/search/?q=${query}`);
    const data = await res.json();
    return data;
  } catch (e) {
    const err = e as Error;

    return { error: err.message };
  }
}

export async function createPost(
  title: string,
  content: string,
  category: string
) {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, category }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
}

export async function updatePost(
  postId: string,
  title: string,
  content: string,
  category: string
) {
  const token = localStorage.getItem("token");
  console.log(title, category);
  try {
    const res = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content, category }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function deletePost(postId: string) {
  try {
    const res = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
