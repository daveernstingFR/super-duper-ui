<template>
  <div>
    <img alt="Ruler" class="logo" src="../assets/length.png">
    <ul>
      <li v-for="unit in availableUnits" :key="unit.abbreviation">
        {{ unit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getUnits } from '@/api/lengthApi';

export default {
  name: 'LengthView',
  async setup() {
    const availableUnits = ref([]);

    availableUnits.value = await getUnits();

    return {
      availableUnits,
    };
  },
};
</script>
