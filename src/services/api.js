import axios from "axios"

// axios.defaults.baseURL = "https://api.themoviedb.org/3/"

const url = ""

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzM3ZjIxNzY1N2MwNDU5ZmM4MGFmN2QzNjI2YTU1NyIsIm5iZiI6MTczMzI0OTMwNC43MDgsInN1YiI6IjY3NGY0OTE4YjlmNTEyYTNiNWI1MTQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWqB2ESrMHdkAt0eHZgHt-K8Lj_yHmW5MDMrcsebn68",
  },
}

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err))

export const fetchMovies = async (query, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  })

  return response.data
}
