<template>
  <div class="child-lines">
    <img 
      class="child-lines__img" 
      v-for="img of images" 
      :key="img" 
      :src="require(`@/assets/u/${img}`)"
      :alt="img">
  </div>
</template>

<script>
export default {
  name: 'ChildLines',
  data() {
    return {
      images: [],
    }
  },
  computed: {
  },
  created() {
    this.importAll(require.context('@/assets/u/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push(key.replace('./', ''))));
    },
  }
}
</script>

<style lang='scss'>
  .child-lines {
    &__img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
</style>