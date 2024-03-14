import { Component } from "../core/heropy"

export default class Home extends Component {
  render() {
    this.el.innerHTML = '<h1>메인 페이지입니다.</h1>'
  }
}