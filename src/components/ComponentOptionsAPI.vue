<template>
  <section>
    <h1>Options API</h1>

    <ButtonComponent
      id="button-2a"
      @click="handleClick1"
    />
    <ButtonComponent
      id="button-2b"
      @click="handleClick2()"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
  name: 'ComponentOptionsAPI',
  components: {
    ButtonComponent,
  },
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
