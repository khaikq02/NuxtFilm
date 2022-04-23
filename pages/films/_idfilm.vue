<template>
  <div class="flex justify-center">
    <div
      class="flex justify-center items-center text-white flex-col min-h-300 w-500"
    >
      <h2 class="text-textHeader font-medium mt-20">
        {{ theFilm.original_title }}
      </h2>
      <img
        :src="`http://image.tmdb.org/t/p/w500/${theFilm.backdrop_path}`"
        alt=""
        class="mt-10"
      />
      <p class="mt-10">Status: {{ theFilm.status }}</p>
      <p class="mt-10 text-text16">{{ theFilm.overview }}</p>
      <div class="mt-100 mb-30">
        <nuxt-link class="bg-red-500 p-10 mt-30" to="/">Back</nuxt-link>
        <a
          :href="`https://www.sonicthehedgehogmovie.com`"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-red-500 p-10 ml-30"
          >Official Home Page</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  validate({ params }) {
    return /^[0-9]{1,12}$/.test(params.idfilm)
  },
  data() {
    return {
      theFilm: {},
    }
  },
  async fetch() {
    await this.getDetailsFilm()
  },
  methods: {
    async getDetailsFilm() {
      const url = `https://api.themoviedb.org/3/movie/${this.$route.params.idfilm}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`
      const res = await axios.get(url)
      const resultData = res.status === 200 ? res.data : {}

      this.theFilm = { ...resultData }
    },
  },
}
</script>
