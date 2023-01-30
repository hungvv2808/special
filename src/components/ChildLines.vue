<template>
  <div class="child-lines">
    <masonry-wall :items="items" :ssr-columns="18" :column-width="100" :gap="5">
      <template #default="{ item, index }">
        <div :id="index">
          <img 
            class="child-lines__img wow slideInLeft" data-wow-delay="1s" data-wow-duration="5s"
            :src="require(`@/assets/u/${item.path}`)"
            :alt="item.title" 
            loading="lazy" />
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import WOW from 'wow.js'

export default {
  name: 'ChildLines',
  data() {
    return {
      images: [],
      items: []
    }
  },
  computed: {
  },
  created() {
    this.importAll(require.context('@/assets/u/', true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/));
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.items.push({
        title: key,
        path: key.replace('./', ''),
      })));
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
      image-orientation: from-image;
    }
  }
</style>