<template>
  <img
    :class="`hvr-grow swiper-lazy ${
      imageData.image.isRotate
        ? 'rotate-' + (imageData.image.rotate > 0 ? imageData.image.rotate : 'minus' + imageData.image.rotate)
        : ''
    }`"
    ref="img"
  />
</template>

<script>
// import { CONST } from "@/constants/constants";

export default {
  name: "ImageLoader",
  props: {
    dataImg: Object,
  },
  data() {
    return {
      imageData: this.dataImg,
    }
  },
  watch: {
    dataImg: {
      handler(val) {
        if (null !== this.$refs.img) {
          setTimeout(() => {
            this.$refs.img.src = require(`@/assets/u/${val.image.src}/${val.image.path}`);
          }, 1000);
        }
      },
      deep: true,
      immediate: true,
    }
  },
  mounted() {
  },
  methods: {
    toDataURL(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    },
  },
};
</script>

<style lang="scss" scoped></style>
