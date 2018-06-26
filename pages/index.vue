<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
// import nav from '../_nav'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'full',
  middleware: 'authenticated',
  head () {
    return {
      bodyAttrs: {
        class: 'app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden'
      }
    }
  },
  computed: {
    ...mapState({
      nav: state => state.modules.user.nav
    }),
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  },
  methods: {
    ...mapActions({
      validateToken (dispatch, payload) {
        return dispatch('modules/user/validateToken', payload)
      }
    })
  },
  beforeDestroy: function () {
    // `this` points to the vm instance
    window.localStorage.removeItem('token')
  }
}
</script>
