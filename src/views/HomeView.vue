<template>
  <div class="home">
    <div class="home__element">
      <child-lines />
      <card-birthday style="display: none" />
    </div>
    <fire-works-action style="display: none" />
  </div>
</template>

<script>
import ChildLines from '@/components/ChildLines.vue';
import CardBirthday from '@/components/CardBirthday.vue';
import FireWorksAction from '@/components/FireWorksAction.vue';

export default {
  name: 'HomeView',
  components: {
    ChildLines,
    CardBirthday,
    FireWorksAction
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
