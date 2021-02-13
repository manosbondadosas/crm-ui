<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      :src="bg"
    >
      <v-toolbar-title style="width: 300px" class="ml-0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down mx-2">Manos Bondadosas</span>
      </v-toolbar-title>

      <v-row class="flex-column">
        <v-form
          method="get"
          class="hidden-sm-and-down"
          @submit.prevent="search"
        >
          <v-text-field
            v-model="q"
            flat
            hide-details
            solo-inverted
            prepend-inner-icon="fas fa-search"
            label="Search"
          ></v-text-field>
        </v-form>
      </v-row>

      <v-spacer></v-spacer>

      <span class="mx-2">{{ username }}</span>
      <v-btn icon @click="signOut">
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import bg from "@/assets/bg.png";

export default {
  name: "app-bar",
  data() {
    return {
      drawer: true,
      bg,
      username: "Admin"
    };
  },
};
</script>

<style scoped>
</style>