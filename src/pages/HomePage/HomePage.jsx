import MovieList from "../../components/MovieList/MovieList"

const HomePage = ({ trendMovies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <MovieList trendMovies={trendMovies} />
    </>
  )
}

export default HomePage
