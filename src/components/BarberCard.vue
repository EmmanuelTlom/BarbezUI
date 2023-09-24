<template>
  <div style="gap: 1rem" class="row items-center no-wrap">
    <div class="img">
      <img :src="barber.img" alt="" />
    </div>
    <div class="card_details">
      <div>
        <p class="card_small_text">Registered Business Name</p>
        <h5 class="section_subtext">
          {{ barber.name }}
        </h5>
      </div>
      <div>
        <p class="card_small_text">Business Address.</p>
        <address>
          {{ barber.address }}
        </address>

        <div class="row q-mt-md justify-between items-center">
          <a class="view_small" href="">View on Map</a>
          <p class="card_small_text location">
            {{ barber.location }}
          </p>
        </div>
      </div>
      <div>
        <p class="card_small_text">Availability</p>
        <div style="gap: 1rem" class="row items-center no-wrap">
          <p class="maintext">
            Mon - Sat
            <span class="section_subtext">(Days)</span>
          </p>
          <p class="maintext">
            8am - 10pm
            <span class="section_subtext">(Time)</span>
          </p>
        </div>
      </div>
      <div>
        <p class="card_small_text">Service Prices</p>
        <div style="gap: 1rem" class="row items-center no-wrap">
          <p class="maintext">
            NGN1,000 - NGN2,000
            <span class="section_subtext">(Adult haircut)</span>
          </p>
          <p class="maintext">
            NGN800 - NGN1,000
            <span class="section_subtext">(Children haircut)</span>
          </p>
        </div>
      </div>

      <div style="gap: 1rem" class="row no-wrap justify-center">
        <q-btn style="width: 100%" flat no-caps class="btn outline text-black">
          More Info
        </q-btn>
        <q-btn style="width: 100%" flat no-caps class="bg-accent text-white">
          Book me
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  barber: Object,
});
</script>

<style lang="scss" scoped></style>
