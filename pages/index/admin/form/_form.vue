<template>
  <div class="wrapper">
    <template v-if="schemaLoaded && modelLoaded">
    <customForm :propID="id" :modulename="modulename" :moduleurl="moduleurl"> </customForm>
    </template>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'form',
  data () {
    return {
      id: null,
      modulename: 'form',
      moduleurl: 'admin/form'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to.params.form)
    this.id = to.params.form
    next()
  },
  
  mounted () {
    if(this.id === null) {this.resetschema(false)}
    this.getSchemaVuex('44e75d5d-13ac-44a8-a46c-dc4bcdef80bd')
    this.getModelVuex()
  },
  computed: {
    ...mapState({
      schemaLoaded: state => state.modules.form.schemaLoaded,
      modelLoaded: state => state.modules.form.modelLoaded
    })
  },
  methods: {
    ...mapMutations({
      resetschema: 'modules/form/setSchemaLoaded'
    }),
    ...mapActions({
      getSchemaVuex: 'modules/form/getSchema',
      getModelVuex: 'modules/form/getModel'
    })
  }
}
</script>
