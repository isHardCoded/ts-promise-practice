import { loadPosts } from "./api";
import { type Post } from "./types/post";

const posts = await loadPosts();

export function renderPosts() {
  if (posts.length === 0) {
    console.error("Нет данных")
    return
  }

  posts.forEach((post: Post) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <div id="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `
    document.getElementById("list")?.appendChild(li)
  })
}