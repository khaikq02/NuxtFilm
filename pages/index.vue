<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div>
      <ListFilms :films="films"></ListFilms>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data() {
    return {
      films: [],
    }
  },
  async fetch() {
    await this.getDataFilms()
  },
  methods: {
    async getDataFilms() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`
      const res = await axios.get(url)
      const resultData = res.status === 200 ? res.data : {}

      resultData.results.forEach((data) => {
        this.films.push(data)
      })
    },
  },
}
</script>
