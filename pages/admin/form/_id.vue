<template>
  <div class="wrapper">
    <template v-if="schemaLoaded && modelLoaded">
      <customForm
        :propid="id"
        :modulename="modulename"
        :moduleurl="moduleurl"
      />
    </template>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex"
import CustomForm from "~/components/form/form.vue"
export default {
  layout: "app",
  name: "Formpage",
  middleware: "pagechange",
  components: {
    CustomForm
  },
  data() {
    return {
      modulename: "form",
      moduleurl: "admin/form"
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave" + to + from)
    next()
  },
  mounted() {
    console.log("form mounted")
    this.resetschema(false)
    this.getSchemaVuex(this.modulename)
    this.getModelVuex()
  },
  computed: {
    ...mapState({
      schemaLoaded: state => state.modules.form.schemaLoaded,
      modelLoaded: state => state.modules.form.modelLoaded,
      id: state => state.modules.form.id
    })
  },
  methods: {
    ...mapMutations({
      resetschema: "modules/form/setSchemaLoaded"
    }),
    ...mapActions({
      getSchemaVuex: "modules/form/getSchema",
      getModelVuex: "modules/form/getModel"
    })
  }
}
</script>
