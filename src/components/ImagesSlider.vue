<template>
  <swiper class="swiper" v-bind="options">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
  </swiper>
</template>

<script>
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

export default {
  name: "ImagesSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectCoverflow, Autoplay],
    };
  },
  data() {
    return {
      options: {
        modules: this.modules,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: true,
        pagination: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/variables";

.swiper {
  height: $details-height;

  .swiper-wrapper {
    .swiper-slide {
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $purple;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: $orange;

    &:hover {
      color: $yellow;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: $white;

      &-active {
        background: $orange;
      }
    }
  }
}
</style>
