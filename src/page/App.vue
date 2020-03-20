<template>
  <div>
    <h1>Hello Electron</h1>
    <ul>
      <li v-for="(key, idx) in Object.keys(versions)" :key="idx">
        {{ `${key}: ${versions[key]}` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const { versions } = this.$process;
    return {
      versions
    };
  }
};
</script>
