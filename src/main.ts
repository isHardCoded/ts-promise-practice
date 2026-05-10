import { createPost, loadPosts } from "./api";
import { renderPosts } from "./posts"
import "./styles/index.css";
import "./styles/reset.css";

document.querySelector("#app")!.innerHTML = `<ul id="list">
  <button id="addBtn">Add post</button>
</ul>`

const addBtn = document.getElementById('addBtn')
console.log(addBtn)

addBtn?.addEventListener('click', async () => {
  const post = await createPost()
  console.log(post)
  renderPosts()
})

renderPosts()