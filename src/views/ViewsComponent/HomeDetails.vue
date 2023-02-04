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
      <button class="btn hvr-icon-forward hvr-sweep-to-right hvr-rotate">
        Test
        <ion-icon name="arrow-forward-outline" class="hvr-icon"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
import ChildLines from "@/components/ChildLines.vue";
import FireWorksAction from "@/components/FireWorksAction.vue";
import TimeLine from "@/components/TimeLine.vue";

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
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

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
    .btn {
      width: 100px;
      height: 100px;
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
