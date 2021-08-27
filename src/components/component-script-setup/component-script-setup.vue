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

// https://github.com/vuejs/vue-next/issues/4408
type Emits2<T> = {
  [K in keyof T as `on${Capitalize<K & string>}`]?: T[K];
};

type KeyNames<T> = {
  [K in keyof T]: `${K & string}`;
}[keyof T];

// Props
export type Props = {
  title: string,
  initialCounterValue?: number
}

// Emits
const eventNames = Object.freeze([
  'update-counter',
] as const);

type EventNames = keyof typeof eventNames

type EmitsEntry = (event: EventNames, payload: number | string) => void

export type Emits = {
  (event: 'update-counter', payload: number): void
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
