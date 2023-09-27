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
        <h1
          :class="
            this.$router.currentRoute.value.name === 'welcome'
              ? 'logo'
              : 'text-black logo'
          "
        >
          Barberz <br />
          Spot
        </h1>

        <ul v-if="$q.screen.gt.xs" style="gap: 2rem" class="row items-center">
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

        <div style="gap: 1rem" class="row items-center no-wrap">
          <q-btn
            @click="loginModal = true"
            class="bg-accent btn text-white"
            flat
            no-caps
          >
            Login
          </q-btn>
          <q-btn
            @click="registerModal = true"
            class="bg-accent btn text-white"
            flat
            no-caps
          >
            Sign Up
          </q-btn>
          <q-btn
            v-if="!$q.screen.gt.xs"
            flat
            @click="drawer = !drawer"
            round
            :class="
              this.$router.currentRoute.value.name === 'welcome'
                ? 'text-white'
                : ''
            "
            dense
            icon="menu"
          />
        </div>
      </nav>
    </header>
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <h1
          :class="
            this.$router.currentRoute.value.name === 'welcome'
              ? 'logo q-pt-lg q-px-sm'
              : 'text-black logo q-pt-xl q-px-sm'
          "
        >
          Barberz Spot
        </h1>

        <q-list class="q-px-sm q-pt-md">
          <q-item clickable v-ripple>
            <q-item-section> Home </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> About </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Our services </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Contact us </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-dialog v-model="loginModal">
      <q-card class="bg-black q-px-md q-py-lg modal">
        <h1 class="maintext q-mb-md text-center text-white">
          Welcome Back To Barberz Spot
        </h1>

        <div class="q-mt-lg">
          <form>
            <div class="input_wrap">
              <input
                required
                v-model="loginData.email"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div class="input_wrap">
              <input
                required
                v-model="loginData.password"
                type="text"
                placeholder="Password"
              />
            </div>

            <div class="q-mt-md row justify-center">
              <q-btn
                type="submit"
                color="primary"
                class="q-pa-sm"
                style="width: 60%"
              >
                Login
              </q-btn>
            </div>
          </form>
        </div>
      </q-card></q-dialog
    >

    <q-dialog v-model="registerModal">
      <q-card class="bg-black q-px-md q-py-lg modal">
        <h1 class="maintext q-mb-md text-center text-white">
          JOIN BARBERZ SPOT
        </h1>
        <div class="switch">
          <q-btn
            :class="user === 'client' ? 'active' : ''"
            @click="setUser('client')"
            flat
          >
            SIGN UP AS A CLIENT
          </q-btn>
          <q-btn
            :class="user === 'barber' ? 'active' : ''"
            @click="setUser('barber')"
            flat
          >
            SIGN UP AS A BARBER
          </q-btn>
        </div>
        <div class="q-mt-lg">
          <form>
            <div class="input_wrap">
              <input
                required
                v-model="registerData.name"
                type="text"
                placeholder="First Name & Last Name"
              />
            </div>
            <div class="input_wrap">
              <input
                required
                v-model="registerData.email"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div class="input_wrap">
              <input
                required
                v-model="registerData.phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div v-if="user === 'barber'" class="input_wrap">
              <input
                required
                v-model="registerData.business_address"
                type="text"
                placeholder="Business Address"
              />
            </div>
            <div class="input_wrap">
              <input
                required
                v-model="registerData.password"
                type="text"
                placeholder="Password"
              />
            </div>
            <div class="input_wrap">
              <input
                required
                v-model="registerData.confirm_password"
                type="text"
                placeholder="Confirm Password"
              />
            </div>

            <div class="q-mt-md row justify-center">
              <q-btn
                type="submit"
                color="primary"
                class="q-pa-sm"
                style="width: 60%"
              >
                Create My Account
              </q-btn>
            </div>
          </form>
        </div>
      </q-card>
    </q-dialog>

    <q-page-container
      :class="this.$router.currentRoute.value.name === 'welcome' ? '' : 'padd'"
    >
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
      drawer: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      loginModal: ref(false),
      registerModal: ref(false),
      user: ref("barber"),
      loginData: ref({}),
      registerData: ref({}),
    };
  },

  methods: {
    setUser(arg) {
      this.user = arg;
    },
  },
});
</script>
