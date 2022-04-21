<template>
  <div>
    <!-- <div class="mt-20 ml-30">
      <SearchBar></SearchBar>
    </div> -->
    <div class="mt-50 grid grid-cols-3 justify-items-center">
      <div
        v-for="film in films"
        :key="film.id"
        class="bg-cardBg rounded-card mt-50 text-center overflow-hidden"
      >
        <div class="w-300 h-500 relative text-white card-film">
          <div class="absolute info-film">
            <h3 class="w-full text-textHeader font-semibold mt-10">
              {{ film.title }}
            </h3>

            <p class="mt-30">
              Release:
              {{
                new Date(film.release_date).toLocaleString('vie', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p>

            <p class="mt-10">Score Average: {{ film.vote_average }}</p>

            <p class="mt-10">Vote Count: {{ film.vote_count }}</p>

            <p class="overview mt-50 text-text20 font-medium">
              {{ film.overview }}
            </p>

            <NuxtLink
              class="bg-red-500 absolute bottom-0 mb-10 ml-10 p-10 left-0 font-bold"
              :to="{ name: 'films-idfilm', params: { idfilm: film.id } }"
            >
              More Details
            </NuxtLink>
          </div>
          <img
            :src="`http://image.tmdb.org/t/p/w500/${film.poster_path}`"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SearchBar from './SearchBar.vue'
export default {
  // components: { SearchBar },
  props: {
    films: {
      type: Array,
      default() {
        'pending'
      },
    },
  },
  methods: {},
}
</script>

<style scoped>
.info-film {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(100%);
  transition: all 0.3s linear;
}

.card-film:hover .info-film {
  transform: translateY(0);
}

.overview {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
