<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
    >
      <v-icon color="amber">mdi-poll-box</v-icon>
      <v-toolbar-title class="wordmark pl-1" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
        <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'wrubric'
    }
  }
}
</script>

<style  scoped>
.wordmark {
  font-family: 'Baloo Thambi 2', cursive;
  font-size: 30px;
}
</style>
