import s from "./MovieDetailsPage.module.css"
import { Suspense, useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/api"
import clsx from "clsx"

export const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "active")
}

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const goBackLink = useRef(location.state ?? "/movies")
  useEffect(() => {
    if (!movieId) return
    const getData = async () => {
      const data = await fetchMovieById(movieId)
      setMovie(data)
    }
    getData()
  }, [movieId])

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div className={s.container}>
      <Link to={goBackLink.current} className={s.backBtn}>
        Go Back
      </Link>
      <div className={s.movieWrapper}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="Movie poster"
          className={s.img}
        />
        <div>
          <h2>{movie.title} </h2>
          <p>Release Date: {movie.release_date}</p>
          <p>User Score: {Math.ceil(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={s.genreList}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={s.genreItem}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p>Aditional information</p>
        <nav>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<h3>Loading data...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetailsPage
