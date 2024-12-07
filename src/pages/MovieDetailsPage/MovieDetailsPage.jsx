import s from "./MovieDetailsPage.module.css"
import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/api"

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  // console.log(movieId)

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
      <div className={s.movieWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie poster"
          className={s.img}
        />
        <div>
          <h2>{movie.title} </h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Movie Rating: {movie.vote_average}</p>
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
      <div>
        <p>Aditional information</p>
        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
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
