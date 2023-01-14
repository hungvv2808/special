<template>
  <div class="home">
    <child-lines />
  </div>
</template>

<script>
import ChildLines from '@/components/ChildLines.vue';

export default {
  name: 'HomeView',
  components: {
    ChildLines
  }
}
</script>
