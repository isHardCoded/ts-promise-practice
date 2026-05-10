import { renderPosts } from "./posts"

document.querySelector("#app")!.innerHTML = `
    <ul id="list"></ul>
  `

renderPosts()