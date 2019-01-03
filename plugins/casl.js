import Vue from "vue"
import { AbilityBuilder } from "@casl/ability"
import { abilitiesPlugin } from "@casl/vue"

Vue.use(abilitiesPlugin)

export default ({ app }) => {
  // Set `i18n` instance on `app`
  // This way we can use it in middleware and pages `asyncData`/`fetch`
  app.ability = AbilityBuilder.define(can => {
    can("read", "all")
  })
}
