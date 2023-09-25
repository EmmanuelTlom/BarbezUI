<template>
  <div class="service_list_item">
    <div class="row items-center justify-between">
      <p class="text-weight-bold"><strong>Samuel Buhari</strong></p>
      <div>
        <p><strong>Rated</strong></p>
        <q-rating v-model="rating" size=".9em" :max="5" color="primary" />
        <p><small>5/5</small></p>
      </div>
    </div>

    <p>
      The services here was great and awesome i really enjoyed my time what a
      wonderful experience, i will recommend them any day to people what a great
      service indeed.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

let rating = ref(3);
</script>

<style lang="scss" scoped></style>
