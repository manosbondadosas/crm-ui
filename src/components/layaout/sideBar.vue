<template>
  <v-navigation-drawer
    app
    v-model="show"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    :src="bg"
    :bottom="bottom"
    :clipped="clipped"
    :height="height"
    absolute
    dark
  >
    <v-list dense nav class="py-0">
      <v-divider></v-divider>

      <v-list-item v-for="item in menuItems" :key="item" link>
        <router-link class="menu-item" :to="{ path: item.link }">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import bg from "@/assets/bg.png";

export default {
  name: "side-bar",
  props: ["show"],
  data() {
    return {
      bg,
      menuItems: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "My Projects", icon: "mdi-folder", link: "/projects" },
        // { title: "My Groups", icon: "mdi-human", link: "/groups" },
        // { title: "Contacts", icon: "mdi-contacts", link: "/contacts" },
      ],
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      bottom: true,
      clipped: true,
      height: "100%",
    };
  },
};
</script>

<style scoped>
.menu-item {
  text-decoration: none;
  color: white;
  display: flex;
}
</style>