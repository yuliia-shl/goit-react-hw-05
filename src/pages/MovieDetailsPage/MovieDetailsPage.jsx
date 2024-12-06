const MovieDetailsPage = () => {
  return (
    <>
      <p>MovieDetailsPage</p>
    </>
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
