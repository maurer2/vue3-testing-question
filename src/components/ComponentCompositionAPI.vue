<template>
  <section>
    <h1>Composition API</h1>
    <button
      id="button-1"
      type="button"
      @click="handleClick1"
    >
      Clicked {{ counter1 }} time(s)
    </button>
    <button
      id="button-2"
      type="button"
      @click="handleClick2()"
    >
      Clicked {{ counter2 }} time(s)
    </button>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentCompositionAPI',
  setup() {
    const counter1 = ref<number>(0);
    const counter2 = ref<number>(0);

    function handleClick1(): void {
      counter1.value += 1;
    }

    function handleClick2(): void {
      counter2.value += 1;
    }

    return {
      counter1,
      counter2,
      handleClick1,
      handleClick2,
    };
  },
});

</script>

<style scoped>

</style>
