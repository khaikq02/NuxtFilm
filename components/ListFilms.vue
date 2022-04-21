<template>
  <div>
    <div>
      <SearchBar></SearchBar>
    </div>
    <div class="mt-50 grid grid-cols-2 min-h-screen justify-items-center">
      <div
        v-for="film in films"
        :key="film.id"
        class="w-500 min-h-300 bg-cardBg rounded-card mt-50 text-center overflow-hidden"
      >
        <!-- <p>{{ film.vote_average }}</p>
      <p>{{ film.vote_count }}</p>
      <p>{{ film.release_date }}</p> -->

        <h3 class="text-white text-text20 font-semibold p-10">
          {{ film.title }}
        </h3>

        <div class="relative">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + film.poster_path"
            alt=""
            class="w-full object-cover"
          />

          <!-- <p class="absolute top-2/4 text-20 mb-100 font-semibold text-white"> -->
          <!-- Release date: {{ film.release_date }} -->
          <!-- </p> -->
          <p
            class="absolute top-2/4 text-20 mb-30 font-semibold ml-10 mr-10 text-white"
          >
            {{ film.overview }}
          </p>
        </div>

        <div class="text-text16 text-white bg-red-400 h-20">
          <a href="#" class="w-full h-full bg-red-700 p-10">Get More Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  components: { SearchBar },
  props: {
    films: {
      type: Array,
      default() {
        'pending'
      },
    },
  },
}
</script>

<style></style>
