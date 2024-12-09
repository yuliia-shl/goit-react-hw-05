import { defaultImg } from "../../pages/MovieDetailsPage/MovieDetailsPage"
import s from "./MovieList.module.css"
import { Link, useLocation } from "react-router-dom"

const MovieList = ({ trendMovies }) => {
  const location = useLocation()
  return (
    <>
      <ul>
        {trendMovies?.map((trendMovie) => (
          <li key={trendMovie.id} className={s.movieItem}>
            <Link
              to={`/movies/${trendMovie.id.toString()}`}
              state={location}
              className={s.link}
            >
              <img
                src={
                  trendMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${trendMovie.poster_path}`
                    : defaultImg
                }
                width={50}
                alt="Movie poster"
                className={s.img}
              />
              <p>{trendMovie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
