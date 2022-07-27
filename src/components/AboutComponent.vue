<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is an app for performing unit conversions.
    </p>
    <h3>Available types of conversion:</h3>
    <ul>
      <li>
        <router-link to="/length">Length</router-link>
      </li>
      <li>
        Temperature
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
