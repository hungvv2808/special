<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <fire-works-action style="display: block" />
</template>

<script>
import FireWorksAction from '@/components/FireWorksAction.vue';

export default {
  components: {
    FireWorksAction
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
