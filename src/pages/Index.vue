<template>
  <div id="app">
    <Navbar />

    <div class="intro">
      <p class="text-6xl font-black">Hey, I'm Akio</p>
      <p class="text-4xl">Software engineer & tech leader</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
#app {
  @apply h-full;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.intro {
  @apply h-full;
  background: url('../assets/dev.svg') no-repeat;
  background-size: 90%;
  background-position: top 5rem right -20rem;
}
</style>
