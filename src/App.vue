<template>
  <ComponentCompositionAPI />
  <hr>
  <ComponentOptionsAPI />
  <hr>
  <div>
    <button
      type="button"
      @click="handleClick()"
    >
      Click
    </button>
  </div>
  <code>
    {{ state }}
    {{ hasBeenClicked }}
    {{ hasBeenClicke5Times }}
  </code>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ComponentCompositionAPI from './components/ComponentCompositionAPI.vue';
import ComponentOptionsAPI from './components/ComponentOptionsAPI.vue';

// eslint-disable-next-line import/extensions
import { useStore } from './store/index';
// eslint-disable-next-line import/extensions
import { actionNames } from './store/actions';

export default defineComponent({
  name: 'App',
  components: {
    ComponentCompositionAPI,
    ComponentOptionsAPI,
  },
  setup() {
    const store = useStore();

    function handleClick(): void {
      store.dispatch(actionNames.updateNumberOfClicks);
    }

    return {
      state: computed(() => store.state),
      hasBeenClicked: computed(() => store.getters.HAS_BEEN_CLICKED),
      hasBeenClicke5Times: computed(() => store.getters.HAS_BEEN_CLICKED_N_TIMES(5)),
      handleClick,
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
