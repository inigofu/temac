export default async function({ store, route }) {
  // If nuxt generate, pass this middleware
  console.log('pagechange', route.params.id)
  store.commit("modules/form/setID", route.params.id)
}
