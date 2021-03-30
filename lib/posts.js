export async function getPosts () {
  const url = process.env.STRAPI_BASE_URL + 'posts'
  const res = await fetch(url)
  const data = await res.json()
  return data
}
