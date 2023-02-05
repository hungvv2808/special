<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
  >
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
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
  name: "ImagesSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables";

.swiper {
  height: 100vh;

  .swiper-wrapper {
    .swiper-slide {
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
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
