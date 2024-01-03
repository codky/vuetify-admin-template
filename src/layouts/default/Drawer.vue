<template lang="">
<v-navigation-drawer
      v-bind="$attrs"
      dark
      app
      :src="require('@/assets/sidebar.jpg')"
    >

      <template
        v-slot:img="props"
      >
        <v-img
          :gradient="gradient"
          v-bind="props"
        />
      </template>

      <default-drawer-header />

      <v-divider />

      <default-list :items="items" />

    </v-navigation-drawer>
</template>
<script>
import DefaultList from './List.vue'
import DefaultDrawerHeader from './DrawerHeader.vue'
export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader,
    DefaultList
  },
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Pages', icon: 'mdi-menu', items: [
            { title: 'Authentication', icon: 'mdi-login', items: [
              { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in'},
              { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up'},
            ] },
            { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list'},
          ] },
          { title: 'Grid System', icon: 'mdi-grid', to: '/grid-system'},
          { title: 'Grid List Page', icon: 'mdi-view-list-outline', to: '/grid-list-page'},
          { title: 'Breakpoints Page', icon: 'mdi-responsive', to: '/breakpoints'},
          { title: 'Typography Page', icon: 'mdi-format-text-variant-outline', to: '/typography'},
          { title: 'Tables', icon: 'mdi-table-settings', to: '/tables'},
          { title: 'Forms', icon: 'mdi-form-select', to: '/forms'},
          { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons'},
          { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons'},
    ],
  })
}
</script>
<style lang="">

</style>
