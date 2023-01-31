<template>
  <div class="home">
    <div class="home__welcome" v-if="!isChange">
      <div class="poster">
        <text-shadows :label="'Evelyn'" />
        <box-gift />
        <cake-cup />
      </div>
    </div>
    <div class="home__detail" v-else>
      <div class="detail">
        <time-line />
        <child-lines class="none" />
      </div>
      <div class="background">
        <fire-works-action />
      </div>
    </div>
    <div class="buttons">
      <button-temp
        :class="isChange ? 'custom' : ''"
        :label="!isChange ? 'Let\'s go' : 'Back'"
        @click="isChange = !isChange"
      />
    </div>
  </div>
</template>

<script>
import ChildLines from "@/components/ChildLines.vue";
// import CardBirthday from "@/components/CardBirthday.vue";
import FireWorksAction from "@/components/FireWorksAction.vue";
import TimeLine from "@/components/TimeLine.vue";
import BoxGift from "@/components/BoxGift.vue";
import CakeCup from "@/components/CakeCup.vue";
import ButtonTemp from "@/components/ButtonTemp.vue";
import TextShadows from "@/components/TextShadows.vue";

export default {
  name: "HomeView",
  components: {
    ChildLines,
    // CardBirthday,
    FireWorksAction,
    TimeLine,
    BoxGift,
    CakeCup,
    ButtonTemp,
    TextShadows,
  },
  data() {
    return {
      isChange: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/home';
</style>
