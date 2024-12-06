import { Link } from "react-router-dom"

const MovieList = ({ trendMovies }) => {
  return (
    <>
      <ul>
        {trendMovies?.map((trendMovie) => (
          <li key={trendMovie.id}>
            <Link>{trendMovie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
