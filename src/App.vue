<template>
  <ComponentOptionsAPI />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentOptionsAPI from './components/ComponentOptionsAPI.vue';

export default defineComponent({
  name: 'App',
  components: {
    ComponentOptionsAPI,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
