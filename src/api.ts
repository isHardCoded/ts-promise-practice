import type { Post } from "./types/post";

export async function loadPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts")

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