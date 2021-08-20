<template>
  <section>
    <h1>Title</h1>
    <button
      type="button"
      @click="handleClick()"
    >
      Click
    </button>
  </section>
</template>

<script lang="ts">
import {
  ref, defineComponent, PropType, defineExpose,
} from 'vue';

export default defineComponent({
  name: 'ComponentScriptSetup',
  props: {
    title: {
      type: String as PropType<string>,
      default: 'button',
      required: true,
    },
  },
  setup() {
    const counter = ref<number>(0);

    function handleClick(): void {
      counter.value += 1;
    }

    return {
      counter,
      handleClick,
    };
  },
});

</script>

<style scoped>

</style>
