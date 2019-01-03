<template >
  <b-table id="tabladatos" :stacked="stacked" :items="rows" :fields="fields" :filter="filter" hover @row-clicked="select" />
</template>

<script>
export default {
  props: ["rows", "select", "fields", "stacked", "filter"]
}
</script>
