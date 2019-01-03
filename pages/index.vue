<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :nav-items="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <nuxt-child/>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
// import nav from '../_nav'
import { mapState, mapActions } from "vuex"
export default {
  name: "Full",
  middleware: "authenticated",
  head() {
    return {
      bodyAttrs: {
        class:
          "app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
      }
    }
  },
  computed: {
    ...mapState({
      nav: state => state.modules.user.nav,
      rules: state => state.modules.user.rules
    }),
    name() {
      return this.$route.name
    },
    list() {
      return this.$route.matched
    }
  },
  mounted() {
    this.$ability.update(this.rules)
  },
  beforeDestroy: function() {
    // `this` points to the vm instance
    window.localStorage.removeItem("token")
  }
}
</script>
