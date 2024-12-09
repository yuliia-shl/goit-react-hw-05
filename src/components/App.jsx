import "./App.css"
import HomePage from "../pages/HomePage/HomePage"
import Navigation from "./Navigation/Navigation"
import { Route, Routes, useSearchParams } from "react-router-dom"
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"
import MovieReviews from "./MovieReviews/MovieReviews"
import { MovieCast } from "./MovieCast/MovieCast"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

import { useEffect, useState } from "react"
import { fetchTrendMovies } from "../services/api"

function App() {
  const [movies, setMovies] = useState([])
  // const [query, setQuery] = useState("")
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
      </main>
    </>
  )
}

export default App
