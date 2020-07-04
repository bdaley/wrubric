<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">HTML Validator</div>
        <span class="grey--text">This validator checks the markup validity of Web documents in HTML</span>
      </div>
    </v-card-title>

    <v-card-text v-if="report" v-html="report"></v-card-text>
    <v-card-text v-if="scanning">Scanning...</v-card-text>

    <!-- <v-card-actions>
      <v-btn flat>Share</v-btn>
      <v-btn flat color="purple">Explore</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      report: null,
      scanning: false
     }
  },
  computed: {
    url() {
      return this.$store.state.webpage.url || false;
    }
  }

}
</script>

<style>

</style>
