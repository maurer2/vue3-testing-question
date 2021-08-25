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
import { ref, defineExpose, defineProps } from 'vue';

const props = defineProps({
  title: String,
});

const counter = ref<number>(0);

function handleClick(): void {
  counter.value += 1;
}

</script>

<style scoped>

</style>
