import { renderPosts } from "./posts"
import "./styles/index.css";
import "./styles/reset.css";

document.querySelector("#app")!.innerHTML = `<ul id="list"></ul>`

renderPosts()