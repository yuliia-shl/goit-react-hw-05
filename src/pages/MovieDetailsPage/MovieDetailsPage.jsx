import s from "./MovieDetailsPage.module.css"
import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/api"
import clsx from "clsx"

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "active")
}

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
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
      <button className={s.backBtn}>Go Back</button>
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
          {/* <p>{movie.genres}</p> */}
          <ul className={s.genreList}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={s.genreItem}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.infoHeader}>
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
      <Outlet />
    </div>
  )
}

export default MovieDetailsPage

// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією
// про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад.
// Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди.
// Рендериться в нижній частині на сторінці MovieDetailsPage.

// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент
// NotFoundPage, в якому є посилання Link на домашню сторінку.
