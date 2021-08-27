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
import {
  ref, defineProps, defineEmits, toRefs,
} from 'vue';
// https://github.com/vuejs/vue-next/issues/4294#issuecomment-896082769
// import type { Props, Emits } from './component-script-setup.types';

// Props
type Props = {
  title: string,
  initialCounterValue?: number
}

// Emits
const eventNames = Object.freeze([
  'update-counter',
  'test',
] as const);

type EventNames = typeof eventNames[number]

type Emits = {
  (event: EventNames, payload: number): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { initialCounterValue } = toRefs(props);
const counter = ref<number>(
  (initialCounterValue?.value === undefined) ? 0 : initialCounterValue?.value,
);

function handleClick(): void {
  const newCounterValue = counter.value + 1;

  counter.value = newCounterValue;
  emits('update-counter', newCounterValue);
}

</script>

<style scoped>

</style>
