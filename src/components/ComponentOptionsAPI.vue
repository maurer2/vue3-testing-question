<template>
  <section>
    <h1>Options API</h1>
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentOptionsAPI',
  data() {
    return {
      counter1: 0,
      counter2: 0,
    };
  },
  methods: {
    handleClick1() {
      this.counter1 += 1;
    },
    handleClick2() {
      this.counter2 += 1;
    },
  },
});

</script>

<style scoped>

</style>
