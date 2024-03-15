import { Component } from "../core/heropy"

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/minnug-dev/movie-app-vaillajs">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/minnug-dev">
          ${new Date().getFullYear()}
          MINNUG
        </a>
      </div>
    `
  }
}