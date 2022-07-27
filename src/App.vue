<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/length">Length conversions</router-link> |
    Temperature conversions
  </nav>
  <Suspense>
    <router-view/>
  </Suspense>
</template>

<style lang="scss">
@import 'main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
