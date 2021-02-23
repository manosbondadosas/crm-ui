<template>
  <v-app>
    <app-bar @navClick="toggleSideBar" />

    <side-bar :show="showSideBar" class="pr-3" />

    <v-main>
      <router-view class="pl-4"></router-view>
    </v-main>

    <footer-slot />
  </v-app>
</template>

<script>
import AppBar from "@/components/layaout/appBar";
import SideBar from "@/components/layaout/sideBar";
import FooterSlot from "@/components/layaout/footerSlot";

export default {
  name: "App",
  components: {
    AppBar,
    SideBar,
    FooterSlot,
  },
  data() {
    return {
      showSideBar: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
};
</script>
