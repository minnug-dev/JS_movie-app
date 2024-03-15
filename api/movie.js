import fetch from "node-fetch"

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id 
    ? `https://omdbapi.com?apikey=dc015b69&i=${id}&plot=full` 
    : `https://omdbapi.com?apikey=dc015b69&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200) // 네트워크의 정상적인 응답을 의미하는 상태코드
    .json(json) 
}