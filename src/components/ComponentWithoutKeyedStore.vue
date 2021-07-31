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
      <code>
        {{ hasBeenClicked }}
      </code>
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
import { actionNames } from '../store/actions';
// eslint-disable-next-line import/extensions

export default defineComponent({
  name: 'ComponentWithKeyedStore',
  setup() {
    const store = useStore();

    function handleClick(): void {
      store.dispatch(actionNames.updateNumberOfClicks);
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
