<template>
  <footer class="q-pt-xl">
    <div class="footer_grid container">
      <div class="left">
        <h2 data-reveal class="footer_main">
          Barberz
          <span class="text-primary">Spot</span>
        </h2>
        <p data-reveal class="terms q-mt-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          ducimus quasi reiciendis cumque esse non dolores dolorum saepe natus
          voluptatibus.
        </p>

        <p class="terms q-mt-xl">
          Terms of Use <span class="q-mx-md text-primary">|</span> Privacy
          Policy
        </p>
      </div>
      <div class="middle">
        <h5 class="section_paragraph text-primary">Useful Links</h5>
        <div class="links">
          <ul>
            <li data-reveal>
              <q-btn flat no-caps class="terms"> Privacy and Policies </q-btn>
            </li>
            <li data-reveal>
              <q-btn flat no-caps @click="goto('timeline')" class="terms">
                Terms of Service
              </q-btn>
            </li>
            <li data-reveal>
              <q-btn flat no-caps @click="goto('faq')" class="terms">
                Refund Policy
              </q-btn>
            </li>

            <li style="gap: 1rem" class="row items-center no-wrap">
              <span style="white-space: nowrap" class="text-primary terms">
                Follow us</span
              >
              <span style="gap: 1rem" class="row no-wrap items-center">
                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/ig.svg"
                    alt=""
                /></a>
                <a href="">
                  <img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/x.svg"
                    alt=""
                /></a>

                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/fb.svg"
                    alt=""
                /></a>
                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/in.svg"
                    alt=""
                /></a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <h5 data-reveal class="section_paragraph text-primary">Contact Us</h5>
        <div class="links">
          <ul>
            <li data-reveal style="gap: 1rem" class="row items-center no-wrap">
              <img
                style="width: 12px; height: 12px; flex-shrink: 0"
                src="../assets/call.svg"
                alt=""
              />
              <a href="" class="terms"> +234 123-456-09 </a>
            </li>
            <li data-reveal style="gap: 1rem" class="row no-wrap">
              <img
                style="width: 12px; height: 12px; flex-shrink: 0"
                src="../assets/location.svg"
                alt=""
              />
              <address class="terms">
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="q-py-lg terms text-center">
      Copyright © 2023 Barberz Spot. All rights reserved.
    </p>
  </footer>
</template>

<script setup></script>

<style lang="sass" scoped></style>
