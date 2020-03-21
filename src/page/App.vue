<template>
  <div class="faces">
    <Face />
  </div>
</template>

<script>
import Face from '@components/Face';

export default {
  components: { Face }
};
</script>

<style lang="scss" scoped>
.faces {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
