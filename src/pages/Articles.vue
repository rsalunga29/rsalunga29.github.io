<template>
  <div class="articles flex">
    <div class="w-1/1 max-w-lg mx-auto h-full pt-16">
      <p class="text-lg">
        I also write tech-related articles in my spare time. However this is not a frequent activity,
        I only write whenever I have a topic in mind I want to share, although hopefully someday I'll be
        able to write one article per day or per week. Here are some of the article's I've written so far:
      </p>

      <div class="text-center align-center mt-16" v-if="isLoading">
        <i class="fas fa-spinner fa-pulse text-6xl"></i>
        
        <p class="text-md mt-4">Loading...</p>
      </div>

      <div class="text-center align-center mt-16" v-if="isErrored">
        <i class="fas fa-exclamation-triangle text-6xl text-red-600"></i>
        
        <p class="text-md mt-4">Something went wrong!</p>
      </div>

      <ArticleList :articles="this.articles" v-if="!isLoading" />
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  components: {
    ArticleList,
  },

  mounted() {
    this.getDevArticles()
  },

  data() {
    return {
      articles: [],
      isErrored: false,
      isLoading: true,
    }
  },

  methods: {
    getDevArticles(page=1) {
      this.$http.get(`https://dev.to/api/articles?username=rsalunga29&per_page=10&page=${page}`)
        .then(response => {
          this.articles = response.data
          
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
          this.isErrored = true
        })
    }
  }
}
</script>

<style>
.articles {
  @apply h-auto;
  background: url('../assets/dev2.svg') /*, url('../assets/dev3.svg')*/;
  background-repeat: no-repeat /*, no-repeat*/;
  background-size: 50% /*, 55%*/;
  background-position: top 2rem left -5rem /*, bottom 2rem right -23rem*/;
}
</style>
