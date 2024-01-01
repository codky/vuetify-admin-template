<template>
  <v-container>
    <v-card class="pa-3">
      <v-card-title>
        Button Colors
      </v-card-title>
      <v-row>
        <v-col cols="auto">
        <v-btn color="primary">
          Primary
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn color="secondary">
          secondary
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn color="success">
          success
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn color="error">
          error
        </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="pa-3">
      <v-card-title>
        Button Size
      </v-card-title>
      <v-row>
        <v-col cols="auto">
        <v-btn
          color="primary"
          x-small
          >
          x-small
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn
          color="secondary"
          small
          >
          small
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn
          color="success"
          >
          Regular
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn
          color="error"
          large
          >
          large
        </v-btn>
        </v-col>
        <v-col cols="auto">
        <v-btn
          color="error"
          x-large
          >
          x-large
        </v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
