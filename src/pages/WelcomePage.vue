<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero_main">
        Welcome to Barberz Spot: Your Gateway to a Perfect Cut!
      </h1>

      <p class="section_paragraph">
        Looking for the best barbers around you? Look no further! Barberz Spot
        is your one-stop solution for finding top-notch barbers in your area.
        Whether you need a classic haircut, a stylish fade, or a clean shave,
        our platform connects you with skilled barbers who can make you look
        your best.
      </p>

      <div
        style="gap: 4rem"
        class="looking_for justify-center row items-center no-wrap"
      >
        <p class="small_text">
          <i class="fa-solid fa-magnifying-glass"></i>Looking For A Barber?
        </p>

        <form>
          <div class="input_wrap">
            <i class="fa-solid fa-location-pin"></i>
            <input placeholder="Enter Your Location Here..." type="text" />
          </div>

          <q-btn type="submit"> Search </q-btn>
        </form>
      </div>

      <p class="invest">
        <span> <i class="fa-solid fa-star"></i> INVEST IN YOUR LOOKS</span
        ><span> <i class="fa-solid fa-star"></i> LETS MAKE YOU LOOK COOL</span>
        <span> <i class="fa-solid fa-star"></i> COMFORT AT ITS BEST </span>
      </p>
    </div>
  </div>

  <section class="container">
    <div style="gap: 1rem" class="row no-wrap items-center">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div><img src="../assets/barb.png" alt="" /></div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div>
          <h2 class="maintext q-mb-md">Redefining Grooming Excellence</h2>

          <p class="section_paragraph">
            At Barberz Spot, we are more than just a platform for finding
            barbers – we are a movement that aims to redefine the grooming
            experience. Our journey began with a simple vision: to empower
            individuals to embrace their unique style and feel confident in
            their own skin.
          </p>

          <q-btn class="btn q-mt-md bg-primary"> Read More </q-btn>

          <div class="q-mt-xl">
            <p class="small_text">Why Choose Us?</p>

            <ul class="why">
              <li class="row justify-between items-center">
                <p>Community Spirit</p>
                <i class="fa-solid fa-arrow-right"></i>
              </li>
              <li class="row justify-between items-center">
                <p>Hand Picked Talent</p>
                <i class="fa-solid fa-arrow-right"></i>
              </li>
              <li class="row justify-between items-center">
                <p>Convenience Redefined</p>
                <i class="fa-solid fa-arrow-right"></i>
              </li>
              <li class="row justify-between items-center">
                <p>Unmatched Satisfaction</p>
                <i class="fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services container">
    <div class="text-center">
      <h1 class="maintext q-mb-md">Our Services</h1>

      <p class="section_paragraph">
        Barberz Spot is your ultimate grooming companion in the digital realm.
        Our innovative platform is designed to revolutionize your grooming
        experience. With a seamless blend of technology and style, we bring a
        range of tailored services to your fingertips, ensuring that your
        grooming needs are met with precision and convenience.
      </p>
    </div>

    <div class="grid">
      <div class="div">
        <img src="../assets/serv1.png" alt="" />
        <img src="../assets/tag.svg" alt="" />
      </div>
      <div class="div">
        <img src="../assets/serv2.png" alt="" />
        <img src="../assets/tag.svg" alt="" />
      </div>
      <div class="div">
        <img src="../assets/serv3.png" alt="" />
        <img src="../assets/tag.svg" alt="" />
      </div>
      <div class="div">
        <img src="../assets/serv4.png" alt="" />
        <img src="../assets/tag.svg" alt="" />
      </div>
    </div>
  </section>

  <section>
    <div class="row justify-center">
      <p class="invest bg-black q-pa-md">
        <span> <i class="fa-solid fa-star"></i> INVEST IN YOUR LOOKS</span
        ><span> <i class="fa-solid fa-star"></i> LETS MAKE YOU LOOK COOL</span>
        <span> <i class="fa-solid fa-star"></i> COMFORT AT ITS BEST </span>
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
