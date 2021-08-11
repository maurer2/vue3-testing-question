<template>
  <dt class="key">
    Key
  </dt>
  <dd class="value">
    Value 1
  </dd>
  <dd class="value">
    Value 2
  </dd>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentMultiRoot',
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
