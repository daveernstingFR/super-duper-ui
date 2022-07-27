export async function getUnits() {
  const unitResponse = await fetch('http://localhost:8081/super-duper-engine/convert/length');
  const unitJson = await unitResponse.json();
  return unitJson.units;
}

export async function convertBetween(fromUnit, toUnit, value) {
  // TODO implement me
  console.log('I should request a conversion (from, to, of)', fromUnit, toUnit, value);
}
