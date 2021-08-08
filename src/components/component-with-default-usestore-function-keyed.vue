<template>
  <section>
    <button
      type="button"
      @click="handleClick()"
    >
      Click
    </button>
    <div>
      Debug
      <code>
        {{ state }}
      </code>
      -
      <code>
        {{ hasBeenClicked }}
      </code>
      -
      <code>
        {{ hasBeenClicked5Times }}
      </code>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
// eslint-disable-next-line import/extensions
import { useStore } from 'vuex';
import { key } from '../store/index';
/// import { index } from '../mocks/store';
import { actionNames } from '../store/actions';
// eslint-disable-next-line import/extensions

export default defineComponent({
  name: 'ComponentWithKeyedStore',
  setup() {
    const store = useStore(key);

    function handleClick(): void {
      store.dispatch(actionNames.UPDATE_NUMBER_OF_CLICKS);
    }

    return {
      state: computed(() => store.state),
      hasBeenClicked: computed(() => store.getters.HAS_BEEN_CLICKED),
      hasBeenClicked5Times: computed(() => store.getters.HAS_BEEN_CLICKED_N_TIMES(5)),
      handleClick,
    };
  },
});

</script>
