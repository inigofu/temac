<template>
  <div class="wrapper">
    <template v-if="schemaLoaded && modelLoaded">
      <customForm :propid="id" :modulename="modulename" :moduleurl="moduleurl"/>
    </template>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex"
import CustomForm from "~/components/form/form.vue"
export default {
  layout:"app",
  name: "Roles",
  middleware: "pagechange",
  components: {
    CustomForm
  },
  data() {
    return {
      modulename: "fields",
      moduleurl: "admin/fields"
    }
  },
  mounted() {
    this.resetschema(false)
    this.getSchemaVuex("fields")
    this.getModelVuex()
  },
  computed: {
    ...mapState({
      schemaLoaded: state => state.modules.form.schemaLoaded,
      modelLoaded(state) {
        return state.modules[this.modulename].modelLoaded
      },
      id: state => state.modules.form.id
    })
  },
  methods: {
    ...mapMutations({
      resetschema: "modules/form/setSchemaLoaded"
    }),
    ...mapActions({
      getSchemaVuex(dispatch, payload) {
        return dispatch("modules/form/getSchema", payload)
      },
      getModelVuex(dispatch, payload) {
        return dispatch("modules/" + this.modulename + "/getModel", payload)
      }
    })
  }
}
</script>
