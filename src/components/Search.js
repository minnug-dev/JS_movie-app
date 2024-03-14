import { Component } from "../core/heropy"
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!" />
      <button type="button" class="btn btn-primary">
        Search!
      </button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', event => {
      // trim을 통해 공백 존재 유무 판단하여, 
      // 문자가 있을 때는, 공백 제거하여 참(truthy)에 해당
      // 문자가 없을 때는, 탭이나 엔터키를 공백을 모두 제거했을 때 빈문자 데이터가 되므로 => 거짓(falsy)에 해당
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}
