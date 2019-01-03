<template>
  <div class="wrapper">
    <template v-if="schemaLoaded && modelLoaded">
      <customForm :propid="id" :modulename="modulename" :moduleurl="moduleurl"/>
    </template>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex"

export default {
  name: "Fields",
  middleware: "pagechange",
  data() {
    return {
      modulename: "fields",
      moduleurl: "admin/fields"
    }
  },
  async fetch({ store, params }) {
    console.log("fields fecth")
    store.commit("modules/form/setSchemaLoaded", false)
    store.dispatch(
      "modules/form/getSchema",
      "2c202af7-9404-447c-b38c-04fabeacdcfc"
    )
    store.dispatch("modules/fields/getModel")
    // this.getSchema()
    // this.getData()
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
