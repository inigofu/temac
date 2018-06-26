export default function ({ store, redirect }) {
  console.log('Authenticated', store.getters['modules/user/isAuthenticated'])
  if (!store.getters['modules/user/isAuthenticated']) {
    return redirect('/pages/login')
  }
}
