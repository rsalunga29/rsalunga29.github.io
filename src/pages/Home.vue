<template>
  <div class="intro pl-6 md:pl-16 pt-32 md:pt-56">
    <p class="text-6xl font-black">
      Hey, I'm Akio
    </p>

    <p class="text-4xl md:text-3xl">Software engineer & tech lead1</p>
  </div>
</template>

<style>
.intro {
  height: calc(100% - 4rem);
  background: url('../assets/dev.svg') no-repeat;
  background-size: 90%;
  background-position: top 5rem right -20rem;
}

@media only screen and (max-width: 768px) {
  .intro {
    height: calc(100% - 4rem);
    background: url('../assets/dev1.svg'), url('../assets/dev.svg');
    background-repeat: no-repeat, no-repeat;
    background-size: 80%, 100%;
    background-position: top 2rem left -8rem, bottom 5rem right -8rem;
  }
}
</style>
