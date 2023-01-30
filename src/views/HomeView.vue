<template>
  <div class="home">
    <div class="home__element">
      <card-birthday style="display: block" />
      <child-lines />
    </div>
    <fire-works-action style="display: block" />
  </div>
</template>

<script>
import ChildLines from '@/components/ChildLines.vue';
import CardBirthday from '@/components/CardBirthday.vue';

export default {
  name: 'HomeView',
  components: {
    ChildLines,
    CardBirthday,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    position: relative;

    &__element {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      user-select: none;
    }
  }
</style>
