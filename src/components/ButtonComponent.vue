<template>
  <button
    :id="id"
    type="button"
    class="button"
    @click="handleClick"
  >
    Clicked {{ counter }} time(s)
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    id: {
      type: String as PropType<string>,
      default: 'button',
      required: true,
    },
  },
  emits: {
    click: null,
  },
  setup(_, { emit }) {
    const counter = ref<number>(0);

    function handleClick(): void {
      counter.value += 1;

      emit('click');
    }

    return {
      counter,
      handleClick,
    };
  },
});

</script>

<style scoped>
.button {
  margin: 0 1rem;
}
</style>
