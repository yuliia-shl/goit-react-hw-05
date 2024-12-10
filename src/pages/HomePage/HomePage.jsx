import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList"
import { fetchTrendMovies } from "../../services/api"

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await fetchTrendMovies()
        setMovies(results)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      <MovieList trendMovies={movies} />
    </>
  )
}

export default HomePage
