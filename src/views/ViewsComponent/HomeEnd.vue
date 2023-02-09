<template>
  <div class="end">
    <div class="end__element">
      <type-writer :dataTexts="dataTexts" />
    </div>
    <div class="end__element">
      <card-birthday />
    </div>
  </div>
</template>

<script>
// import TextTyping from "@/components/TextTyping.vue";
import TypeWriter from "@/components/TypeWriter.vue";
import CardBirthday from "@/components/CardBirthday.vue";
import { CONST } from "@/constants/constants";
import WOW from "wow.js";

export default {
  name: "HomeEnd",
  components: {
    // TextTyping,
    TypeWriter,
    CardBirthday,
  },
  data() {
    return {
      text: "Hello, my name is Parker.",
      dataTexts: CONST.wishes,
      duration: 2.5,
    };
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.end {
  display: flex;
  width: 100vw;
  height: 100vh;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;

    .type-writer {
      width: 100%;
      text-align: left;
    }

    .text {
      width: 100%;
      display: flex;

      .text-typing {
        width: initial;

        ::v-deep {
          h1 {
            margin: 0.5em 0;
          }
        }
      }
    }
  }

  > div {
    &:first-child {
      flex-basis: 40%;
      flex-direction: column;
      position: relative;
      left: 50%;
      transform: translateX(-100%);
    }
    &:last-child {
      flex-basis: 60%;
    }
  }
}
</style>
