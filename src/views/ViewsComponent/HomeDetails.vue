<template>
  <div class="details">
    <div class="details__data">
      <time-line />
      <child-lines class="none" />
    </div>
    <div class="details__background">
      <fire-works-action />
    </div>
    <div class="details__buttons">
      <button class="btn hvr-icon-back hvr-sweep-to-left hvr-grow wow animate__zoomIn" data-wow-duration="0.5s" @click="changeToDetails('poster')">
        <ion-icon name="arrow-back-outline" class="hvr-icon"></ion-icon>
        Prev
      </button>
      <button class="btn hvr-icon-forward hvr-sweep-to-right hvr-grow wow animate__zoomIn" data-wow-duration="0.7s" @click="changeToDetails('end')">
        Next
        <ion-icon name="arrow-forward-outline" class="hvr-icon"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
import ChildLines from "@/components/ChildLines.vue";
import FireWorksAction from "@/components/FireWorksAction.vue";
import TimeLine from "@/components/TimeLine.vue";
import WOW from "wow.js";

export default {
  name: "HomeDetails",
  components: {
    ChildLines,
    FireWorksAction,
    TimeLine,
  },
  data() {
    return {};
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    changeToDetails(moveTo) {
      this.$emit('change-to-details', moveTo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.details {
  display: flex;
  position: relative;
  width: 100%;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__buttons {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 2;
    display: flex;
    gap: 10px;

    .btn {
      padding: 0;
      border: none;
      width: 159px;
      height: 56px;
      border-radius: 40px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    [class*="hvr-"]:not(.hvr-icon) {
      transition-duration: 0.3s;
      background: $yellow;

      &::before {
        background: $pink;
      }
    }
  }
}
</style>
