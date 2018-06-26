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
  name: 'fields',
  data () {
    return {
      id: null,
      modulename: 'fields',
      moduleurl: 'admin/fields'
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.fields
    next()
  },
  mounted () {
    if(this.id === null) {this.resetschema(false)}
    this.getSchemaVuex('2c202af7-9404-447c-b38c-04fabeacdcfc')
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
