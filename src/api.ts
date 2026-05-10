export async function loadPosts() {
  try {
    const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts")
    if (!response.ok) throw new Error("Ошибка при загрузке")
    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}