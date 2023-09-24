<template>
  <q-page class="container">
    <div class="row justify-between items-center">
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
      <div v-for="(barber, index) in barbers" :key="index">
        <BarbersComp :barber="barber" />
      </div>
    </section>

    <section>
      <div v-for="(barber, index) in barbers" :key="index">
        <BarbersCard :barber="barber" />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import BarbersComp from "src/components/BarbersComp.vue";
import BarbersCard from "src/components/BarberCard.vue";
import { ref } from "vue";

let barbers = ref([
  {
    img: "../assets/barber1.png",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
  {
    img: "../assets/barber2.png",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
  {
    img: "../assets/barber3.png",
    name: "Sam & Co Barbers",
    address: "No 14 Adedamola Road Barnawa Kaduna State.",
    distance: "4.5 Miles Away.",
  },
]);
</script>
