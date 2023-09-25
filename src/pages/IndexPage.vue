<template>
  <q-page class="container">
    <div class="row q-mt-lg justify-between items-center">
      <div>
        <h1 class="maintext">Barbers Shops Near You</h1>
        <p class="section_small_text">
          (Barbing Saloons Available Due To Your Search.)
        </p>
      </div>
      <div>
        <h1 class="maintext">
          20 <span class="section_subtext">20 Barbing saloons Available</span>
        </h1>
      </div>
    </div>

    <section class="barbers">
      <Splide
        :options="{
          rewind: true,
          gap: 30,
          pagination: false,
          type: 'loop',
          arrows: true,
          perPage: 3,
          autoScroll: {
            speed: 0.5,
          },
          breakpoints: {
            640: {
              perPage: 1,
              gap: 20,
            },
            1000: {
              perPage: 2,
            },
            1454: {
              perPage: 3,
            },
            2000: {
              perPage: 3,
            },
          },
        }"
      >
        <SplideSlide v-for="(barber, index) in barbers" :key="index">
          <BarbersComp :barber="barber" />
        </SplideSlide>
      </Splide>
      <!-- <div v-for="(barber, index) in barbers" :key="index">
        <BarbersComp :barber="barber" />
      </div> -->
    </section>

    <section>
      <div v-for="(barber, index) in barbers" :key="index">
        <BarbersCard :barber="barber" />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import BarbersComp from "src/components/BarbersComp.vue";
import BarbersCard from "src/components/BarberCard.vue";
import { ref } from "vue";

let barbers = ref([
  {
    img: "barber1",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
  {
    img: "barber2",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
  {
    img: "barber3",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
]);
</script>
