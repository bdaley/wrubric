<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">Web I</div>
        <span class="grey--text">Validation required for Web I students.</span>
      </div>
    </v-card-title>

<!-- https://www.npmjs.com/package/mochawesome -->
    <v-card-text id="mocha"></v-card-text>
    <v-card-text v-if="scanning">Scanning...</v-card-text>


    <!-- <v-card-actions>
      <v-btn flat>Share</v-btn>
      <v-btn flat color="purple">Explore</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import jest from 'jest'
export default {
  data() {
    return {
      report: null,
      scanning: false,
     }
  },
  computed: {
    url() {
      return this.$store.getters['webpage/getUrl'];
    }
  },
  watch: {
    url: function (val, oldVal) {
      this.runReport(val)
    },
  },
  methods: {
    runReport: function(url){
      console.warn("Running report");
      this.scanning = true;

        console.log(assert.equal((3 + 5), 8));

      // assert.typeOf(url, 'string', 'url is a string');
      // mocha.run();
      this.scanning = false;
    }
  },
  mounted(){
  }

}
</script>

<style>

</style>
