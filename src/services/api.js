import axios from "axios"

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzM3ZjIxNzY1N2MwNDU5ZmM4MGFmN2QzNjI2YTU1NyIsIm5iZiI6MTczMzI0OTMwNC43MDgsInN1YiI6IjY3NGY0OTE4YjlmNTEyYTNiNWI1MTQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWqB2ESrMHdkAt0eHZgHt-K8Lj_yHmW5MDMrcsebn68"
axios.defaults.headers.common["Authorization"] = API_TOKEN

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`)
  return data
}

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`)
  return data
}

export const fetchCreditsByMovieId = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`)
  return data.cast
}

export const fetchReviewsByMovieId = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`)
  return data.results
}

export const fetchSearchMovies = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`)
  return data
}
