<template>
   <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="$emit('drawer')" />

      <v-spacer></v-spacer>

        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>
</template>
<script>
export default {
  name: 'DefaultBar'

}
</script>
<style lang="">

</style>
