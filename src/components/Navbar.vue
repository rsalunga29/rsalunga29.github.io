<template>
  <div class="nav">
    <router-link to="/">/</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/articles">/articles</router-link>
    <a href="mailto:rsalunga29@gmail.com">/contact</a>
  </div>
</template>

<style>
.nav {
  @apply flex items-start justify-end pt-8 pr-8;
}

.nav a {
  @apply px-10 font-extrabold;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
