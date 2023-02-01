<template>
  <div class="yearly-timeline">
    <div
      class="timeline wow animate__fadeInDown"
      v-for="(tl, index) in timelines"
      :key="tl.key"
      :data-wow-delay="`${0.5 * (index + 1)}s`"
      :data-wow-duration="`${index + 1}s`"
    >
      <div class="timeline-content">
        <h3 class="title">{{ tl.value }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { CONST } from "@/constants/constants";
import WOW from "wow.js";

export default {
  name: "TimeLine",
  data() {
    return {
      timelines: CONST.TIMELINE,
    };
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

$border-colors: $blue, $pink, $orange, $yellow, $green, $yellow-light, $purple,
  $brown, $red, $grey;

.yearly-timeline {
  width: 50vw;
  height: 92vh;
  margin: 2rem auto;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }

  .timeline {
    width: calc(50% - 15px);
    padding: 0 30px 30px 0;
    float: left;
    position: relative;

    &.wow {
      visibility: hidden;
    }

    &::before,
    &::after {
      content: "";
      height: 60px;
      width: 2px;
      border-left: 2px solid $blue;
      transform: rotate(-45deg);
      position: absolute;
      right: 27px;
      bottom: 0;
    }
    &::after {
      background-color: $white;
      height: 20px;
      width: 20px;
      border: 6px solid $blue;
      border-radius: 50%;
      right: 0;
    }
    &:nth-child(even) {
      padding: 0 0 30px 30px;
      float: right;

      &:before {
        transform: rotate(45deg);
        right: auto;
        left: 30px;
      }
      &:after {
        right: auto;
        left: 0;
      }

      .timeline-content {
        border-radius: 15px 15px 15px 0;
      }
    }

    $i: 1;
    @each $color in $border-colors {
      &:nth-child(4n + #{$i}):before,
      &:nth-child(4n + #{$i}):after {
        border-color: $color;
      }
      &:nth-child(4n + #{$i}) .timeline-content {
        background: $color;
      }
      $i: $i + 1;
    }

    .timeline-content {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $gray;
      padding: 30px 35px 35px;
      border-radius: 15px 15px 0 15px;
      position: relative;

      &:before {
        content: "";
        background-color: $white;
        position: absolute;
        left: 17px;
        right: 17px;
        top: 17px;
        bottom: 17px;
        z-index: -1;
      }
      &:hover {
        text-decoration: none;
      }

      .title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .yearly-timeline .timeline {
    width: 100%;
    padding: 30px 0 0 30px;
    margin: 0 0 20px;
  }
  .yearly-timeline .timeline:before,
  .yearly-timeline .timeline:nth-child(even):before {
    transform: rotate(-45deg);
    bottom: auto;
    top: 0;
    right: auto;
    left: 30px;
  }
  .yearly-timeline .timeline:after,
  .yearly-timeline .timeline:nth-child(even):after {
    bottom: auto;
    top: 0;
    right: auto;
    left: 0;
  }
  .yearly-timeline .timeline-content,
  .yearly-timeline .timeline:nth-child(even) .timeline-content {
    border-radius: 0 15px 15px 15px;
  }
}
</style>
