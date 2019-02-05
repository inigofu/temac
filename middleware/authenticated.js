export default function({ store, redirect }) {
  if (!store.getters["modules/user/isAuthenticated"]) {
    console.log("isAuthenticated")
    return redirect("/pages/login")
  }
}
