<template>
  <ComponentCompositionAPI />
  <hr>
  <ComponentOptionsAPI />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentCompositionAPI from './components/ComponentCompositionAPI.vue';
import ComponentOptionsAPI from './components/ComponentOptionsAPI.vue';

export default defineComponent({
  name: 'App',
  components: {
    ComponentCompositionAPI,
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
