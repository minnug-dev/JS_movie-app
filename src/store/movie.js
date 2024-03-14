import { Store } from "../core/heropy"

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false
})

export default store 
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
  }
  const res = await fetch(`https://omdbapi.com?apikey=dc015b69&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults } = await res.json()
  store.state.movies = [
    ...store.state.movies, // page 불러오기
    ...Search 
  ]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
  store.state.loading = false
}