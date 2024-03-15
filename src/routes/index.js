import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie'

export default createRouter([
  { path: '#/', component: Home }, // 메인페이지
  { path: '#/movie', component:  Movie}
])