export default function({ store, redirect }) {
  if (store.getters["modules/user/isAuthenticated"]) {
    console.log("anonymous")
    return redirect("/")
  }
}
