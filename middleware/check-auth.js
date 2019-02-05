import { getTokenFromCookie, getTokenFromLocalStorage } from "~/utils/auth"

export default async function({ store, req }) {
  // If nuxt generate, pass this middleware
  if (process.server && !req) return
  const token = process.server
    ? getTokenFromCookie(req)
    : getTokenFromLocalStorage()
  if (!token) return
  await store
    .dispatch("modules/user/validateToken", token)
    .then(data => {
      console.log("auth user", data)
    })
    .catch(error => {
      throw error
    })
}
