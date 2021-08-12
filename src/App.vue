<template>
  <ComponentCompositionAPI />
  <hr>
  <ComponentOptionsAPI />
  <hr>
  <ComponentUseStoreDefaultKeyed />
  <hr>
  <ComponentSingleRoot class="parent parent-unscoped" />
  <hr>
  <dl>
    <ComponentMultiRoot class="parent parent-unscoped" />
  </dl>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ComponentCompositionAPI from './components/component-composition-api.vue';
import ComponentOptionsAPI from './components/component-options-api.vue';
import ComponentUseStoreDefaultKeyed from './components/component-with-default-usestore-function-keyed.vue';
import ComponentMultiRoot from './components/component-multi-root.vue';
import ComponentSingleRoot from './components/component-single-root.vue';

// eslint-disable-next-line import/extensions
import { useStore } from './store/index';
// eslint-disable-next-line import/extensions
import { actionNames } from './store/actions';

export default defineComponent({
  name: 'App',
  components: {
    ComponentCompositionAPI,
    ComponentOptionsAPI,
    ComponentUseStoreDefaultKeyed,
    ComponentMultiRoot,
    ComponentSingleRoot,
  },
  setup() {
    const store = useStore();

    function handleClick(): void {
      store.dispatch(actionNames.UPDATE_NUMBER_OF_CLICKS);
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

.parent-unscoped {
  background: yellow;
}
</style>

<style scoped>
.parent {
  border: 5px dashed red;
}

</style>
