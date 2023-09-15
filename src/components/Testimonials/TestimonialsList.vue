<script setup>
  import TestimonialsItem from "./TestimonialsItem.vue";

  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';

  const components = {
    Swiper,
    SwiperSlide,
  };

  const modules = [Navigation];

  const breakpoints = {
    768: {
      slidesPerView: 2, 
      spaceBetween: 20, 
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: '2',
      spaceBetween: 30,
    },
    1360: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    },
  };
</script>
<template>
  <div class="row">
    <swiper
    :navigation="true"
    :loop="true"
    :centeredSlides="true"
    :modules="modules"
    :breakpoints="breakpoints"
    class="mySwiper">
      <swiper-slide v-for="i in 10" :key="i.id">
        <TestimonialsItem 
          title="Super Helpful !!!!"
          text="There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. "
          userImage="/user-img-1.png"
          userTitle="Anna Gates"
          userDegree="Web Designer" />
      </swiper-slide>
    </swiper>
  </div>
</template>