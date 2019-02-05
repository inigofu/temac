<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :nav-items="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <no-ssr>
          <nuxt/>
          </no-ssr>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>
<script>
// import nav from '../_nav'
import AppAside from "~/components/Aside.vue"
import Breadcrumb from "~/components/Breadcrumb.vue"
import Callout from "~/components/Callout.vue"
import AppFooter from "~/components/Footer.vue"
import AppHeader from "~/components/Header/Header.vue"
import Sidebar from "~/components/Sidebar/Sidebar.vue"
import { mapState, mapActions } from "vuex"
export default {
    components: {
        AppHeader,
        Breadcrumb,
        Callout,
        Sidebar,
        AppAside,
        AppFooter
    },
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