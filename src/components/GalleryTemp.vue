<template>
  <transition-group tag="figure" class="gallery-temp" name="open">
    <img
      v-for="(image, index) of images"
      :src="require(`@/assets/u/202205/${image}`)"
      :key="index"
      :style="{ '--circle-x': x, '--circle-y': y }"
      @click="onClick"
    />
  </transition-group>
</template>

<script>
export default {
  name: "GalleryTemp",
  props: {
    images: Array,
  },
  data() {
    return {
      x: "50%",
      y: "50%",
    };
  },
  created() {
  },
  mounted() {},
  methods: {
    onClick(event) {
      const x = event.offsetX - event.target.offsetLeft;
      const y = event.offsetY - event.target.offsetTop;
      const xPercent = `${Math.round((100 * x) / event.target.offsetWidth)}%`;
      const yPercent = `${Math.round((100 * y) / event.target.offsetHeight)}%`;
      this.x = xPercent;
      this.y = yPercent;
      this.$emit("next", { x: xPercent, y: yPercent });
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-temp {
  display: block;
  position: relative;
  padding-top: calc(2 / 3 * 100%);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 100vw;
  perspective: 100vw;
  width: 50%;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    cursor: pointer;
    --circle-x: 50%;
    --circle-y: 50%;
  }
}

@-webkit-keyframes openup {
  to {
    -webkit-clip-path: circle(100vw at var(--circle-x) var(--circle-y));
    clip-path: circle(100vw at var(--circle-x) var(--circle-y));
  }
}

@keyframes openup {
  to {
    -webkit-clip-path: circle(100vw at var(--circle-x) var(--circle-y));
    clip-path: circle(100vw at var(--circle-x) var(--circle-y));
  }
}

.open-enter-active {
  -webkit-clip-path: circle(0 at var(--circle-x) var(--circle-y));
  clip-path: circle(0 at var(--circle-x) var(--circle-y));
}

.open-enter-to {
  -webkit-animation: openup 500ms ease-in;
  animation: openup 500ms ease-in;
}
</style>
