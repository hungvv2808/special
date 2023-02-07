<template>
  <div class="end">
    <div class="end__element">
      <text-typing />
    </div>
    <div class="end__element">
      <card-birthday />
    </div>
  </div>
</template>

<script>
import TextTyping from "@/components/TextTyping.vue";
import CardBirthday from "@/components/CardBirthday.vue";

export default {
  name: "HomeEnd",
  components: {
    TextTyping,
    CardBirthday,
  },
};
</script>

<style lang="scss" scoped>
.end {
  display: flex;
  /* flex-direction: column; */
  width: 100vw;
  height: 100vh;
  margin: 2rem auto;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div {
    &:first-child {
      flex-basis: 40%;
    }
    &:last-child {
      flex-basis: 60%;
    }
  }
}
</style>
