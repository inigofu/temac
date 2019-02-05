<template>
  <h1>"hello"</h1>
</template>

<script>
// import nav from '../_nav'
import { mapState, mapActions } from "vuex"
export default {
  layout:"app",
  name: "Full",
  middleware: "authenticated"
}
</script>
