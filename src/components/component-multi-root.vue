<template>
  <dt
    class="key"
    v-bind="$attrs"
  >
    Key
  </dt>
  <dd
    class="value"
    v-bind="$attrs"
  >
    Value 1
  </dd>
  <dd
    class="value"
    :class="inheritedClassName"
  >
    Value 2
  </dd>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// https://github.com/vuejs/vue-next/issues/2669
export default defineComponent({
  name: 'ComponentMultiRoot',
  setup(props, { attrs }) {
    console.log(props, attrs.class);

    return {
      inheritedClassName: attrs.class,
    };
  },
});

</script>

<style scoped>
.key {
  margin: 0;
}

.value {
  margin: 0;
}
</style>
