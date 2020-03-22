<template>
  <div class="faces">
    <!-- <Face /> -->
    <FaceTs />
  </div>
</template>

<script>
import Face from '@components/Face';
import FaceTs from '@components/FaceTs';

export default {
  components: { Face, FaceTs }
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
