<template>
  <v-app>
    <page-bar />

    <page-view />
  </v-app>
</template>
<script>
import PageBar from './AppBar.vue'
import PageView from './View.vue'
export default {
  name: 'PageLayout',
  components: {
    PageBar,
    PageView
  }
}
</script>
<style lang="">

</style>
