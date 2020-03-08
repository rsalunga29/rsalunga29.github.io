<template>
  <div class="about pt-16">
    <div class="flex justify-end text-lg">
      <div class="w-2/4 whitespace-pre-line pr-3">
        <p>
          Hi, I'm Akio, software engineer and tech lead based in Pampanga, Philippines. I have more than 4 years of
          relevant experience in defining requirements, designing, delivering, and maintaining complex web applications.
        </p>

        <br />

        <p>
          I taught myself coding in 2013, a year after that I joined a Manila-based startup as one of its pioneering engineers.
          I make fullstack web applications and scripts, and I also have some experience making mobile applications for iOS systems.
        </p>

        <br />

        <p>
          I specialize in PHP, JS, and SQL. I also have professional experience working with Laravel, VueJS, NuxtJS, Python, and Google Cloud Platform.
          In my spare time, I enjoy reading books and blogs, watching videos about science and history, learning about new web technologies
          and dipping my toes in Deep Learning.
        </p>

        <br />

        <p>
          I currently work as CTO at <a href="https://www.instagram.com/hiraya_manila/" class="prev-work-links" target="_blank" rel="noopener noreferrer">@hiraya_manila</a>.
          Previously, I worked at <a href="https://www.facebook.com/PaydroPH/" class="prev-work-links" target="_blank" rel="noopener noreferrer">@paydroph</a> and
          <a href="https://www.instagram.com/orangeappsph/" class="prev-work-links" target="_blank" rel="noopener noreferrer">@orangeappsph</a>.
        </p>

        <br />

        <p class="text-sm">P.S Roland Emmanuel is my real name, but I prefer to be called Akio.</p>

        <br />

        <p>
          Connect with me: &nbsp;
          <a href="https://twitter.com/akiocodes" class="social-links" target="_blank" rel="noopener noreferrer">
            <i class="text-2xl fab fa-twitter-square"></i>
          </a>

          <a href="https://linkedin.com/in/rsalunga29" class="social-links" target="_blank" rel="noopener noreferrer">
            <i class="text-2xl fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/rsalunga29" class="social-links" target="_blank" rel="noopener noreferrer">
            <i class="text-2xl fab fa-github-square"></i>
          </a>

          <a href="https://dev.to/rsalunga29" class="social-links" target="_blank" rel="noopener noreferrer">
            <i class="text-2xl fab fa-dev"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
p > a.prev-work-links {
  @apply font-bold;
  border-bottom: 2px solid #ffffff;
}

p > a.social-links > i {
  @apply px-2;
}

.about {
  height: calc(100% - 4rem);
  background: url('../assets/dev1.svg') no-repeat;
  background-size: 80%;
  background-position: top 2rem left -20rem;
}
</style>
