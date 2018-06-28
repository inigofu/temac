export default async function ({  store, route }) {
    // If nuxt generate, pass this middleware
   store.commit('modules/form/setID',route.params.id)
 }