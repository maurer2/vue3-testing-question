<template>
  <ComponentCompositionAPI />
  <hr>
  <ComponentOptionsAPI />
  <hr>
  <code>
    {{ state }}
  </code>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ComponentCompositionAPI from './components/ComponentCompositionAPI.vue';
import ComponentOptionsAPI from './components/ComponentOptionsAPI.vue';

// eslint-disable-next-line import/extensions
import { useStore, useStoreReturnType } from './store/index';

export default defineComponent({
  name: 'App',
  components: {
    ComponentCompositionAPI,
    ComponentOptionsAPI,
  },
  setup() {
    const store = useStore();

    return {
      store,
      state: computed(() => store.state),
    };
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

code {
  white-space: pre-wrap;
}
</style>
