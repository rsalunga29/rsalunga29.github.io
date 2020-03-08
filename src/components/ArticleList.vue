<template>
 <section class="section mt-8">
   <div v-for="article in this.articles" :key="article.id">
     <div class="max-w-lg rounded overflow-hidden shadow-lg mb-6">
        <a :href="article.url" target="_blank" rel="noopener noreferrer">
          <img class="w-full" :src="article.cover_image" :alt="article.title" loading="lazy">
        </a>

        <div class="bg-white">
          <div class="px-6 py-4">
            <h1 class="font-bold text-black text-xl mb-2">
              <a :href="article.url" target="_blank" rel="noopener noreferrer">{{ article.title }}</a>
            </h1>

            <p class="text-gray-700 text-base">
              {{ article.description }}
            </p>
          </div>

          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              v-for="tag in article.tag_list"
              :key="tag">
              #{{ tag }}  
            </span>
          </div>
        </div>
     </div>
   </div>
 </section>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
}
</script>
