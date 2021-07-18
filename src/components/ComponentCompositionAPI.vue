<template>
  <section>
    <h1>Composition API</h1>
    <ButtonComponent
      id="button-1a"
      @click="handleClick1"
    />
    <ButtonComponent
      id="button-1b"
      @click="handleClick2()"
    />
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
  name: 'ComponentCompositionAPI',
  components: {
    ButtonComponent,
  },
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
