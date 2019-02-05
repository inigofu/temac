export default async function({ store, route,from }) {
  // If nuxt generate, pass this middleware
  store.commit("modules/form/setID", route.params.id)
}
