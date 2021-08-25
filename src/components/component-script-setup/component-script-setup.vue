<template>
  <section>
    <h1>Title</h1>
    <button
      type="button"
      @click="handleClick()"
    >
      Click {{ counter }}
    </button>
  </section>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

type Props = {
  title: string,
  initalCounterValue?: number
}

type Emits = {
  // (event: Event['type'], payload: number | string): void
  (event: 'update-counter', payload: number): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const counter = ref<number>(0);

function handleClick(): void {
  const newCounterValue = counter.value + 1;

  counter.value = newCounterValue;
  emits('update-counter', newCounterValue);
}

</script>

<style scoped>

</style>
