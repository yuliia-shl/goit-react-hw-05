import { Link } from "react-router-dom"

const MovieList = ({ trendMovies }) => {
  return (
    <>
      <ul>
        {trendMovies?.map((trendMovie) => (
          <li key={trendMovie.id}>
            <Link to={`/movies/${trendMovie.id.toString()}`}>
              {trendMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
