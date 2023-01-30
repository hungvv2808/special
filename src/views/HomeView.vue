<template>
  <div class="home">
    <div class="home__element">
      <div class="timeline">
        <time-line />
      </div>
      <div class="images">
        <card-birthday class="none" />
        <child-lines style="height: 50vh" />
      </div>
    </div>
    <div class="home__element">
      <fire-works-action />
    </div>
  </div>
</template>

<script>
import ChildLines from '@/components/ChildLines.vue';
import CardBirthday from '@/components/CardBirthday.vue';
import FireWorksAction from '@/components/FireWorksAction.vue';
import TimeLine from '@/components/TimeLine.vue';

export default {
  name: 'HomeView',
  components: {
    ChildLines,
    CardBirthday,
    FireWorksAction,
    TimeLine,
  }
}
</script>

<style lang="scss" scoped>
  .home {
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
</style>
