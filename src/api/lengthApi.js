export async function getUnits() {
  const unitResponse = await fetch('http://localhost:8081/super-duper-engine/convert/length');
  const unitJson = await unitResponse.json();
  return unitJson.units;
}

export async function convert(value, fromUnit, toUnit) {
  const queryString = `?from=${fromUnit}&to=${toUnit}&value=${value}`;
  const convertResponse = await fetch(`http://localhost:8081/super-duper-engine/convert/length${queryString}`);
  const convertJson = await convertResponse.json();
  return convertJson;
}
