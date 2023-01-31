<template>
  <div class="home">
    <div class="home__welcome" v-if="!isChange">
      <div class="poster">
        <box-gift />
        <cake-cup />
      </div>
    </div>
    <div class="home__detail" v-else>
      <div class="home__detail__element">
        <div class="timeline">
          <time-line />
        </div>
        <div class="images">
          <card-birthday class="none" />
          <child-lines />
        </div>
      </div>
      <div class="home__detail__element">
        <fire-works-action />
      </div>
    </div>
    <button-temp
      :class="isChange ? 'custom' : ''"
      :label="!isChange ? 'Let\'s go' : 'Back'"
      @click="isChange = !isChange"
    />
  </div>
</template>

<script>
import ChildLines from "@/components/ChildLines.vue";
import CardBirthday from "@/components/CardBirthday.vue";
import FireWorksAction from "@/components/FireWorksAction.vue";
import TimeLine from "@/components/TimeLine.vue";
import BoxGift from "@/components/BoxGift.vue";
import CakeCup from "@/components/CakeCup.vue";
import ButtonTemp from "@/components/ButtonTemp.vue";

export default {
  name: "HomeView",
  components: {
    ChildLines,
    CardBirthday,
    FireWorksAction,
    TimeLine,
    BoxGift,
    CakeCup,
    ButtonTemp,
  },
  data() {
    return {
      isChange: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  position: relative;

  .cta {
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    z-index: 2;
  }

  &__welcome {
    background: radial-gradient(circle, #f8e0d8 30%, #f5c5b5);

    .poster {
      display: flex;
      width: 100vw;
      height: 100vh;
      position: relative;

      .box-gift {
        position: absolute;
        left: 45%;
        top: 55%;
        transform: translate(-55%, -65%);
      }
      .cake {
        position: absolute;
        left: 60%;
        top: 50%;
        transform: translate(-50%, -60%);
      }
    }
  }
  &__detail {
    display: flex;
    position: relative;

    &__element {
      display: flex;
      justify-content: center;
      user-select: none;

      &:first-child {
        z-index: 1;

        .timeline {
          flex-basis: 40%;
        }
        .images {
          flex-basis: 60%;
        }
      }
      &:last-child {
        position: absolute;
        z-index: 0;
      }
    }
  }
}
</style>
