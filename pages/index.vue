<template>
  <div>

    <v-container fluid class="blue white--text">
      <v-layout
        row
        wrap
        justify-center
        align-center

      >
        <v-flex
          xs12
          sm8
          md6
        >
          <v-form @submit.prevent="scan">


            <h3>Test your page before submitting!</h3>

              <v-layout
                  class="my-5"

                row
                justify-center
                align-center

              >
                <v-text-field
                  solo
                  flat
                  label="Website URL"
                  placeholder="https://"
                  prepend-inner-icon="mdi-web"
                  type="url"
                  required
                  v-model="url"
                ></v-text-field>
              <v-btn
                depressed
                dark
                large
                color="blue darken-4"
                class="ml-4"
                type="submit"

              >Scan</v-btn>
              </v-layout>
          </v-form>

        </v-flex>
      </v-layout>

    </v-container>
    <v-container>

      <v-layout
        row
        justify-center
        align-stretch


      >
        <v-flex
          xs12
          sm10
          md8
        >
          <div class="validators">

            <!-- @todo at some point we need to dynamically import -->
            <!-- @url https://github.com/nuxt/components/issues/13 -->
            <!-- <template v-for="plugin in plugins">
              <component :key="plugin" :is="plugin">{{plugin}}</component>
            </template> -->

            <Validator></Validator>
            <WebOne></WebOne>
          </div>
        </v-flex>
      </v-layout>
    </v-container>


  </div>



</template>

<script>
export default {
  data() {
    return {
      url: '',
      running: false
    }
  },
  methods: {
    scan: function(){
      this.running = true;
      this.$store.commit("webpage/setUrl", this.url)
    }
  }
}
</script>


<style>
.v-input__slot {
  margin:0;
}

.v-text-field__details {
  display: none;
}

.validators > div {
  margin: 30px 0;
}


.validators > div:first-child {
  margin-top:15px;
}

</style>
