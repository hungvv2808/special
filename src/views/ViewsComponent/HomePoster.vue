<template>
  <div class="poster">
    <text-shadows :label="'Evelyn'" />
    <box-gift />
    <cake-cup />
    <button-temp
      :label="'Let\'s go'"
      @click="changeToDetails"
    />
  </div>
</template>

<script>
import ButtonTemp from "@/components/ButtonTemp.vue";
import BoxGift from "@/components/BoxGift.vue";
import CakeCup from "@/components/CakeCup.vue";
import TextShadows from "@/components/TextShadows.vue";

export default {
  name: "HomePoster",
  components: {
    BoxGift,
    CakeCup,
    TextShadows,
    ButtonTemp,
  },
  methods: {
    changeToDetails() {
      this.$emit('change-to-details', 'details');
    }
  }
};
</script>

<style lang="scss" scoped>
.poster {
  display: flex;

  .text-shadows {
    position: absolute;
    width: 50%;
    z-index: 0;
    top: 50%;
    transform: translate(27%, -200%) rotate(0deg);
  }
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
</style>
