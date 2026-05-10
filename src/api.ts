import type { Post } from "./types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function loadPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${BASE_URL}/posts`)

    if (!response.ok) {
      throw new Error("Unknown error")
    }

    const data: Post[] = await response.json()
    return data

  } catch(e) {
    console.error(e);
    return []
  }
}

export async function createPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        title: "test",
        body: "test",
        userId: 1
      })
    })

     if (!response.ok) {
      throw new Error("Unknown error")
    }

    const data = await response.json()
    return data

  } catch (e) {
    console.error(e);
    return []
  }
}