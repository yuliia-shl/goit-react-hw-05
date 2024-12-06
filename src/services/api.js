import axios from "axios"

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzM3ZjIxNzY1N2MwNDU5ZmM4MGFmN2QzNjI2YTU1NyIsIm5iZiI6MTczMzI0OTMwNC43MDgsInN1YiI6IjY3NGY0OTE4YjlmNTEyYTNiNWI1MTQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWqB2ESrMHdkAt0eHZgHt-K8Lj_yHmW5MDMrcsebn68"
axios.defaults.headers.common["Authorization"] = API_KEY

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?language=en-US`, {})

  return response.data
}
