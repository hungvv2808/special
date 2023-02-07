<template>
  <div class="coverflow">
    <swiper class="swiper" v-bind="options">
      <swiper-slide class="slide" v-for="(image, index) in images" :key="index">
        <img
          :class="`hvr-grow ${image.isRotate ? 'rotate-' + (image.rotate > 0 ? image.rotate : 'minus' + image.rotate) : ''}`"
          :src="require(`@/assets/u/${image.src}/${image.path}`)"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination, Navigation, EffectCoverflow, Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default {
  name: "ImagesSlider",
  props: {
    images: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectCoverflow, Autoplay, Keyboard],
    };
  },
  data() {
    return {
      options: {
        modules: this.modules,
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: true,
        pagination: true,
        effect: "coverflow",
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
          disableOnInteraction: false,
        },
        keyboard: { enabled: true },
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables";

.coverflow {
  position: relative;
  width: 57vw;
  height: 300px;

  .swiper {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .slide {
      width: 300px;
      height: 300px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }

      .rotate-minus-90 {
        transform: rotate(-90deg);
      }
      .rotate-90 {
        transform: rotate(90deg);
      }
      .rotate-180 {
        transform: rotate(180deg);
      }
    }

    .swiper-wrapper {
      .swiper-slide {
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

        &-shadow-left,
        &-shadow-right {
          border-radius: 20px;
        }
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
}
</style>
