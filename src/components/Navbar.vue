<template>
  <div class="nav flex items-start justify-end pt-8 md:pr-8">
    <router-link to="/" class="mx-5 md:mx-10 font-extrabold">/</router-link>
    <router-link to="/about" class="mx-5 md:mx-10 font-extrabold">/about</router-link>
    <router-link to="/articles" class="mx-5 md:mx-10 font-extrabold">/articles</router-link>
    <a href="mailto:rsalunga29@gmail.com" class="mx-5 md:mx-10 font-extrabold">/contact</a>
  </div>
</template>

<style>

.nav > a.router-link-exact-active {
  border-bottom: 2px solid #ffffff;
}
</style>
