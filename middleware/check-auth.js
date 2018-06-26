import { getTokenFromCookie, getTokenFromLocalStorage } from '~/utils/auth'


export default async function ({  store, req }) {
   // If nuxt generate, pass this middleware
  if (process.server && !req) return
  const token = process.server ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  console.log(token)
  if(!token) return
  await store.dispatch('modules/user/validateToken', token)
    .then((data) => {
      store.commit('modules/user/setuser', data.user)
    }).catch((error) => {
      throw error
    })
  console.log('check-auth Authenticated', store.getters['modules/user/isAuthenticated'])
}
