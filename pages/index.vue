<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <!-- <div>
      <SearchBar @typedInput="getValueInput"></SearchBar>
    </div> -->

    <div class="mt-30 flex justify-center">
      <input
        v-model.lazy="inputFilm"
        class="w-500 h-50"
        type="text"
        placeholder="Search"
        @keyup.enter="$fetch"
      />
      <button
        v-show="inputFilm !== ''"
        type="button"
        class="bg-red-500 text-white p-10 font-medium text-text16 ml-10"
        @click="clearSearchInput()"
      >
        Back to lastest films
      </button>
    </div>

    <div id="list-films">
      <div v-if="inputFilm === ''">
        <ListFilms :films="films"></ListFilms>
      </div>

      <div v-else>
        <ListFilms :films="searchFilms"></ListFilms>
      </div>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListFilms from '~/components/ListFilms.vue'
export default {
  name: 'IndexPage',
  components: { ListFilms },
  data() {
    return {
      searchFilms: [],
      films: [],
      inputFilm: '',
    }
  },
  async fetch() {
    if (this.inputFilm === '') {
      await this.getDataFilms()
      return
    }

    if (this.inputFilm !== '') {
      this.searchFilms = []
      await this.searchDataMovie()
    }
  },
  fetchDelay: 1000,

  methods: {
    async getDataFilms() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`
      const res = await axios.get(url)
      const resultData = res.status === 200 ? res.data : {}

      resultData.results.forEach((data) => {
        this.films.push(data)
      })
    },

    async searchDataMovie() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${this.inputFilm}`
      const res = await axios.get(url)
      const resultData = res.status === 200 ? res.data : {}
      /*
      eslint-disable no-console
      */

      const newR = resultData.results.filter(
        (data) => data.poster_path !== null
      )
      newR.forEach((data) => {
        this.searchFilms.unshift(data)
      })
      console.log(this.searchFilms)
    },
    clearSearchInput() {
      this.inputFilm = ''
      this.searchFilms = []
    },
    // getValueInput(inputValue) {
    //   this.inputFilm = inputValue
    //   console.log(this.inputFilm)
    // },
  },
}
</script>
