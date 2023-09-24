<template>
  <div class="card">
    <div class="img">
      <img :src="barber.img" alt="" />
    </div>
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
        {{ barber.location }}
      </p>
    </div>

    <div class="row justify-center">
      <q-btn flat no-caps class="bg-accent text-white"> View More Info </q-btn>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  barber: Object,
});
</script>

<style lang="scss" scoped></style>
