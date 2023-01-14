<template>
  <div class="child-lines">
    <masonry-wall :items="items" :ssr-columns="10" :column-width="100" :gap="5">
      <template #default="{ item, index }">
        <div :style="{ height: `${index * 100}px` }">
          <ion-icon name="heart"></ion-icon>
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
export default {
  name: 'ChildLines',
  data() {
    return {
      images: [],
      items: [
        {
          title: 'First',
          description: 'The first item.',
        },
        {
          title: 'Second',
          description: 'The second item.',
        },
      ]
    }
  },
  computed: {
  },
  created() {
    this.importAll(require.context('@/assets/u/', true, /(\.jpg|\.JPG|\.jpeg|\.JPEG|\.png|\.PNG|\.webp)$/));
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
      image-orientation: from-image;
    }
  }
</style>