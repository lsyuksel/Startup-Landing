<script setup>
    import SliderContent from "./SliderContent.vue";
    import SliderImage from "./SliderImage.vue";

    import { Swiper, SwiperSlide } from "swiper/vue";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper/modules';
    
    const components = {
      Swiper,
      SwiperSlide,
    };
    
    const modules = [Navigation];
    
    const scrollDown = () => {
        window.scrollTo(0, document.querySelector(".entry-slider-area").scrollHeight);
    }
</script>

<template>
    <div class="entry-slider-area">
        <div class="container">
            <swiper :navigation="false" :modules="modules" class="mySwiper">
                <swiper-slide v-for="i in 10" :key="i.id">
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-lg-1 order-2">
                            <SliderContent />
                        </div>
                        <div class="col-lg-6 order-lg-2 order-1 mb-5 mb-lg-0">
                            <SliderImage />
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="scroll-button">
                <div @click="scrollDown"><img src="/scroll-down.png" alt=""></div>
            </div>
        </div>
    </div>
</template>