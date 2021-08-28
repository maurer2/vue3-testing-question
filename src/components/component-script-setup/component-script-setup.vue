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
const eventNames = Object.freeze({
  updateCounter: 'update-counter',
  test: 'test',
} as const);

type EventKeys = keyof typeof eventNames
type EventNames = typeof eventNames[EventKeys];
type EventPayloads = {
  [eventNames.updateCounter]: number
  [eventNames.test]: never,
  // [key in EventNames]: string | number
};
type Emits = {
  (eventName: EventNames, payload?: unknown): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { initialCounterValue } = toRefs(props);
const counter = ref<number>(
  (initialCounterValue?.value === undefined) ? 0 : initialCounterValue?.value,
);

// eslint-disable-next-line max-len
function emitValue<E extends EventNames, P extends EventPayloads[E] = never>(eventName: E, payload: P): void {
  const hasPayload: boolean = payload !== null;

  if (hasPayload) {
    emits(eventName, payload);

    return;
  }

  emits(eventName);
}

function handleClick(): void {
  const newCounterValue = counter.value + 1;

  counter.value = newCounterValue;
  emitValue(eventNames.updateCounter, newCounterValue);
  // emitValue('update-counter', '5');
  emitValue(eventNames.test, null as never);
}

</script>

<style scoped>

</style>
