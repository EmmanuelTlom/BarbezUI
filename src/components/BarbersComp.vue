<template>
  <div class="card carousel">
    <div class="img">
      <img :src="`/src/assets/${barber.img}.png`" alt="" />
    </div>
    <div>
      <p class="card_small_text">Registered Business Name</p>
      <h5 class="section_subtext">
        {{ barber.name }}
      </h5>
      <p class="card_small_text">Business Address.</p>
      <address>
        {{ barber.address }}
      </address>

      <div class="row q-mt-md justify-between items-center">
        <a class="view_small" href="">View on Map</a>
        <p class="card_small_text location">
          {{ barber.distance }}
        </p>
      </div>

      <div class="row q-mt-lg justify-center">
        <q-btn
          @click="serviceModal = true"
          flat
          no-caps
          class="bg-accent text-white"
        >
          View More Info
        </q-btn>
      </div>
    </div>
  </div>

  <q-dialog v-model="serviceModal">
    <q-card class="bg-black q-px-md q-py-lg modal">
      <div style="gap: 2rem" class="row no-wrap justify-between items-center">
        <div style="gap: 1rem" class="left row items-center">
          <img
            style="
              width: 47px;
              height: 47px;
              border-radius: 100%;
              object-fit: contain;
            "
            src="../assets/barber1.png"
            alt=""
          />
          <div>
            <h3 class="subtext">Sam & Co Barbing Salon</h3>
            <div class="card_small_text">
              No 22 akite road by round about Kaduna state.
            </div>
          </div>
        </div>

        <div class="right">
          <q-rating v-model="rating" size=".9em" :max="5" color="yellow" />
          <p class="subtext">4.7<small class="card_small_text">/5</small></p>
        </div>
      </div>
      <p>Book a service below.</p>
      <div class="service_list">
        <div class="head row justify-between items-center">
          <h5 class="section_subtext">Our Services</h5>
          <p class="text-secondary">Charges</p>
        </div>
        <div class="service_list_item row justify-between items-center">
          <h5 class="small_text smaller">Full hair barbing & Washing</h5>
          <p>
            <small>#1000</small>
            <q-btn flat no-caps class="book_service"> Book service </q-btn>
          </p>
        </div>
        <div class="service_list_item row justify-between items-center">
          <h5 class="small_text smaller">Beards trim & Washing</h5>
          <p>
            <small>#1000</small>
            <q-btn flat no-caps class="book_service"> Book service </q-btn>
          </p>
        </div>
        <div class="service_list_item row justify-between items-center">
          <h5 class="small_text smaller">Dread locking</h5>
          <p>
            <small>#1000</small>
            <q-btn flat no-caps class="book_service"> Book service </q-btn>
          </p>
        </div>
        <div class="service_list_item row justify-between items-center">
          <h5 class="small_text smaller">Haircut & Body Massaging</h5>
          <p>
            <small>#1000</small>
            <q-btn flat no-caps class="book_service"> Book service </q-btn>
          </p>
        </div>

        <div class="q-mt-lg row justify-center">
          <q-btn
            style="width: 90%"
            flat
            no-caps
            class="bg-accent q-pa-sm text-white"
          >
            Proceed To Payment
          </q-btn>
        </div>
      </div>
    </q-card></q-dialog
  >
</template>

<script setup>
import { ref } from "vue";
let rating = ref(3);
let serviceModal = ref(false);

const props = defineProps({
  barber: Object,
});
</script>

<style lang="scss" scoped></style>
