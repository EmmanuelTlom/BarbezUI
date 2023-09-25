<template>
  <q-page class="container">
    <section>
      <div style="gap: 1rem" class="row no-wrap items-center">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <splide>
            <SplideSlide v-for="(barber, index) in barbers" :key="index">
              <img :src="`/src/assets/${barber.img}.png`" alt="" />
            </SplideSlide>
          </splide>
        </div>
        <div class="col-md-6 bg q-pa-md col-sm-6 col-xs-12">
          <div>
            <h2 class="section_subtext">About us:</h2>
            <p class="section_paragraph">
              We are a barbing salon that offers top notch service , we love our
              customers and we place their satisfaction as a major priority and
              we love to serve people.
            </p>
          </div>

          <div>
            <h2 class="section_subtext">Availability:</h2>
            <div style="gap: 1rem" class="row items-center">
              <p class="small_text">
                Mon-Sat <span class="small_text smaller"> (Days) </span>
              </p>
              <p class="small_text">
                8am - 10pm <span class="small_text smaller"> (Daily) </span>
              </p>
            </div>
          </div>
          <div>
            <h2 class="section_subtext">Availability for the day:</h2>
            <p>
              <span class="small_text smaller text-green"> 8am-10pm </span>
              <span class="small_text smaller text-green"> 8am-10pm </span>
              <span class="small_text smaller text-green"> 8am-10pm </span>
            </p>
          </div>
          <div>
            <h2 class="section_subtext">Address:</h2>
            <p class="section_paragraph">
              No 22 akite road by round about Kaduna state.
            </p>
            <p class="section_paragraph">
              <i class="fa-solid q-mr-sm fa-location-pin"></i>4.5 Miles Away
              From you.
            </p>
          </div>
          <div>
            <h2 class="section_subtext">Contact info:</h2>
            <p class="section_paragraph">08023432123, 09022334456</p>
          </div>

          <div class="row q-mt-lg justify-center">
            <q-btn color="primary"> Book Me </q-btn>
          </div>
        </div>
      </div>
    </section>

    <section>
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
      </div>
    </section>

    <section>
      <div class="container">
        <splide
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
            <img :src="`/src/assets/${barber.img}.png`" alt="" />
          </SplideSlide>
        </splide>
      </div>
    </section>

    <section>
      <div
        style="gap: 2rem"
        class="row q-mt-lg justify-between no-wrap items-start"
      >
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div>
            <h6 class="section_subtext">Reviews From Customers</h6>
            <p class="section_paragraph q-mt-md">
              We love getting reviews from customers to better know how possibly
              best we can serve them better and how they enjoyed our services.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <h6 class="section_subtext">Overview</h6>
          <div class="rating_box q-mt-md">
            <div>
              <p class="section_paragraph">Overall Ratings.</p>
              <h5 class="section_subtext">4.7/<span>5</span></h5>
            </div>

            <div>
              <div>
                <div style="gap: 1rem" class="row no-wrap items-center">
                  <div class="row items-baseline no-wrap">
                    <p class="section_paragraph">5</p>
                    <small class="text-italic">Excellent</small>
                  </div>
                  <q-linear-progress size="10px" :value="progress" />
                </div>
                <div class="row justify-end">
                  <q-rating
                    v-model="rating"
                    size=".9em"
                    :max="5"
                    color="primary"
                  />
                  <small class="text-secondary">50 people voted</small>
                </div>
              </div>
              <div>
                <div style="gap: 1rem" class="row no-wrap items-center">
                  <div class="row items-baseline no-wrap">
                    <p class="section_paragraph">5</p>
                    <small class="text-italic">Excellent</small>
                  </div>
                  <q-linear-progress size="10px" :value="progress" />
                </div>
                <div class="row justify-end">
                  <q-rating
                    v-model="rating"
                    size=".9em"
                    :max="5"
                    color="primary"
                  />
                  <small class="text-secondary">50 people voted</small>
                </div>
              </div>
              <div>
                <div style="gap: 1rem" class="row no-wrap items-center">
                  <div class="row items-baseline no-wrap">
                    <p class="section_paragraph">5</p>
                    <small class="text-italic">Excellent</small>
                  </div>
                  <q-linear-progress size="10px" :value="progress" />
                </div>
                <div class="row justify-end">
                  <q-rating
                    v-model="rating"
                    size=".9em"
                    :max="5"
                    color="primary"
                  />
                  <small class="text-secondary">50 people voted</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ratings">
      <RatingsComp v-for="n in 5" :key="n" />
    </section>
  </q-page>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import BarbersComp from "src/components/BarbersComp.vue";
import BarbersCard from "src/components/BarberCard.vue";
import RatingsComp from "src/components/RatingsComp.vue";
import { ref } from "vue";
let rating = ref(3);
let progress = ref(0.4);

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
