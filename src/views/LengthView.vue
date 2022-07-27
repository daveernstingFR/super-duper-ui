<template>
  <div>
    <img alt="Ruler" class="logo" src="../assets/length.png">

    <label for="valueInput">Please choose a starting value
      <input id="valueInput" type="number" v-model="startValue"/>
    </label>

    <label for="fromInput">
      From Unit:
      <select id="fromInput" v-model="fromUnit">
        <option v-for="unit in availableUnits" :key="unit.abbreviation" :value="unit.abbreviation">
          {{ `${unit.name} (${unit.abbreviation})` }}
        </option>
      </select>
    </label>

    <label for="toInput">
      To Unit:
      <select id="toInput" v-model="toUnit">
        <option v-for="unit in availableUnits" :key="unit.abbreviation" :value="unit.abbreviation">
          {{ `${unit.name} (${unit.abbreviation})` }}
        </option>
      </select>
    </label>

    <button @click="performConversion">
      Convert!
    </button>

    <h1 v-if="convertedValue !== null">
      {{ `${startValue} ${fromUnit} is ${convertedValue.value} ${convertedValue.unit}` }}
    </h1>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getUnits, convert } from '@/api/lengthApi';

export default {
  name: 'LengthView',
  async setup() {
    const availableUnits = ref([]);
    const startValue = ref(0);
    const fromUnit = ref(null);
    const toUnit = ref(null);
    const convertedValue = ref(null);

    availableUnits.value = await getUnits();

    async function performConversion() {
      convertedValue.value = await convert(startValue.value, fromUnit.value, toUnit.value);
    }

    return {
      availableUnits,
      startValue,
      performConversion,
      fromUnit,
      toUnit,
      convertedValue,
    };
  },
};
</script>
