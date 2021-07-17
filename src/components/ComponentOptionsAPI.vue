<template>
  <section>
    <h1>Click test</h1>
    <button
      type="button"
      @click="handleClick1"
    >
      Clicked {{ counter1 }} time(s)
    </button>
    <button
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
  name: 'ComponentOptionsAPI',
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
