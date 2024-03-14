import { createRouter } from '../core/heropy'
import Home from './Home'

export default createRouter([
  { path: '#/', component: Home } // 메인페이지
])