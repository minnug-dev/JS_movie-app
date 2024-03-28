import { Store } from "../core/heropy"

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'MINNUG / ParkMinJoo',
  email: 'parkminnug@gmail.com',
  blog: 'https://velog.io/@minnug/posts',
  github: 'https://github.com/minnug-dev',
  repository: 'https://github.com/minnug-dev/movie-app-vaillajs',
})