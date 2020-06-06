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
                ></v-text-field>
              <v-btn depressed dark large color="blue darken-4" class="ml-4">Scan</v-btn>
              </v-layout>
        </v-flex>
      </v-layout>

    </v-container>
    <v-container>

      <v-layout
        column
        justify-center
        align-center

      >
        <v-flex
          xs12
          sm8
          md6
        >
          <div class="text-center">
          </div>
        </v-flex>
      </v-layout>
    </v-container>


  </div>



</template>

<script>

export default {
  components: {
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

</style>
