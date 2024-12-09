import "./App.css"
import { Route, Routes, useSearchParams } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react"
import { fetchTrendMovies } from "../services/api"
import Navigation from "./Navigation/Navigation"
const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
)
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"))
const MovieCast = lazy(() => import("./MovieCast/MovieCast"))

function App() {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

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

  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue)
    setSearchParams(searchParams)
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<h3>Loading data...</h3>}>
          <Routes>
            <Route path="/" element={<HomePage trendMovies={movies} />}></Route>
            <Route
              path="/movies"
              element={<MoviesPage handleSetQuery={handleSetQuery} />}
            />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
