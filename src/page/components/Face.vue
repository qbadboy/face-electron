<template>
  <div class="face">
    <video
      ref="face-video"
      class="face-video"
      width="480"
      height="360"
      autoplay
    ></video>
    <canvas
      ref="face-canvas"
      class="face-canvas"
      width="480"
      height="360"
    ></canvas>
  </div>
</template>

<script>
import * as faceapi from 'face-api.js';

export default {
  data() {
    return {
      videoDom: null
    };
  },

  methods: {
    loadModels() {
      const { $env, $host } = this;
      const URL =
        $env === 'production' ? '../src/public/models' : `${$host}/models`;
      return Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(URL),
        faceapi.nets.faceExpressionNet.loadFromUri(URL)
      ]);
    },
    initFace() {
      const video = this.$refs['face-video'];
      const canvas = this.$refs['face-canvas'];
      const displaySize = {
        width: video.width,
        height: video.height
      };

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

      video.addEventListener('play', () => {
        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

          faceapi.matchDimensions(canvas, displaySize);

          const resizeResults = faceapi.resizeResults(detections, displaySize);
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          // faceapi.draw.drawDetections(canvas, resizeResults);
          faceapi.draw.drawFaceLandmarks(canvas, resizeResults);
          faceapi.draw.drawFaceExpressions(canvas, resizeResults);
        }, 100);
      });
    }
  },

  mounted() {
    this.loadModels().then(this.initFace);
  },

  destroyed() {
    if (this.videoDom) {
      this.videoDom.removeEventListener('play');
    }
  }
};
</script>

<style lang="scss" scoped>
.face {
  position: relative;
  &-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>
