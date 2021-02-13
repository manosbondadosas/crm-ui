<template>
  <v-app>
    <app-bar />

    <!-- <side-bar /> -->

    <!-- <v-content>
      <router-view></router-view>
    </v-content> -->

    <!-- <footer-slot /> -->
  </v-app>
</template>

<script>
// import SideBar from "@/components/layaout/sideBar";
import AppBar from "@/components/layaout/appBar";
// import FooterSlot from "@/components/layaout/footerSlot";

export default {
  name: "App",
  components: {
    // FooterSlot,
    AppBar,
    // SideBar,
  },
};
</script>
