<template>
  <div class="face">
    <button @click="clickHandler">{{buttonText}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Face extends Vue {
  buttonText: string = 'click';

  clickHandler() {
    alert(1);
  }
}
</script>
