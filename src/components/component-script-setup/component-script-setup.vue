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

type EventNames = keyof typeof eventNames
type EventValues = typeof eventNames[EventNames];
type EventPayload = {
  updateCounter: number
  test: string,
};

type Emits = {
  (event: EventValues, payload: string | number): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { initialCounterValue } = toRefs(props);
const counter = ref<number>(
  (initialCounterValue?.value === undefined) ? 0 : initialCounterValue?.value,
);

// eslint-disable-next-line max-len
function emitNewCounterValue<E extends EventValues, P extends EventPayload['updateCounter']>(event: E, payload: P) {
  emits(event, payload);
}

function handleClick(): void {
  const newCounterValue = counter.value + 1;

  counter.value = newCounterValue;
  emitNewCounterValue('update-counter', newCounterValue);
  // emitNewCounterValue('update-counter', '5');

  // emits(eventNames.updateCounter, newCounterValue);
}

</script>

<style scoped>

</style>
