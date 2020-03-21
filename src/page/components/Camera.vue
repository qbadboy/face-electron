<template>
  <div class="camera">
    <video ref="camera-video" width="480" height="320" autoplay></video>
  </div>
</template>

<script>
export default {
  methods: {
    initCamera() {
      const video = this.$refs['camera-video'];
      navigator.mediaDevices
        .getUserMedia({
          video: {},
          audio: false
        })
        .then(stream => {
          video.srcObject = stream;
        })
        .catch(() => {
          console.error('获取视频流错误');
        });
    }
  },
  mounted() {
    this.initCamera();
  }
};
</script>

<style lang="scss" scoped>
.camera {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>