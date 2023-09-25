<template>
  <q-layout view="lHh Lpr lFf">
    <header
      :class="
        this.$router.currentRoute.value.name === 'welcome'
          ? 'white header q-pa-md container '
          : 'header q-pa-md container'
      "
    >
      <nav class="nav row items-center justify-between">
        <h1 class="logo">
          Barberz <br />
          Spot
        </h1>

        <ul style="gap: 2rem" class="row items-center">
          <li>
            <router-link to="" class="nav_link">Home</router-link>
          </li>
          <li>
            <router-link to="" class="nav_link">About</router-link>
          </li>
          <li>
            <router-link to="" class="nav_link">Our Services</router-link>
          </li>
          <li>
            <router-link to="" class="nav_link">Contact Us</router-link>
          </li>
        </ul>

        <q-btn class="bg-accent btn text-white" flat no-caps> Sign Up </q-btn>
      </nav>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
