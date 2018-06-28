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
  name: 'roles',
  middleware: 'pagechange',
  data () {
    return {
      modulename: 'roles',
      moduleurl: 'admin/roles'
    }
  },
  mounted () {
    this.resetschema(false)
    this.getSchemaVuex('28ca109d-4939-4ca4-bed0-f5fd1a11bdf2')
    this.getModelVuex()
    // this.getSchema()
    // this.getData()
  },
  computed: {    
    ...mapState({
      schemaLoaded: state => state.modules.form.schemaLoaded,
      modelLoaded (state) {
        return state.modules[this.modulename].modelLoaded
      },
      id: state => state.modules.form.id
    })
  },
  methods: {
    ...mapMutations({
      resetschema: 'modules/form/setSchemaLoaded'
    }),
    ...mapActions({
      getSchemaVuex (dispatch, payload) {
        return dispatch('modules/form/getSchema', payload)
      },
      getModelVuex (dispatch, payload) {
        return dispatch('modules/' + this.modulename + '/getModel', payload)
      }
    })
  }
}
</script>
