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
  name: 'users',
  data () {
    return {
      id: null,
      modulename: 'users',
      moduleurl: 'admin/users'
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.users    
    next()
  },
  mounted () {
    if(this.id === null) {this.resetschema(false)}
    this.getSchemaVuex('a98c0acd-ff66-482a-a8be-3f9be3c92e88')
    this.getModelVuex()
    // this.getSchema()
    // this.getData()
  },
  computed: {
    ...mapState({
      schemaLoaded: state => state.modules.form.schemaLoaded,
      modelLoaded (state) {
        return state.modules[this.modulename].modelLoaded
      }
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
