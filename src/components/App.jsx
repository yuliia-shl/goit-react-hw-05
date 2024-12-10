import "./App.css"
import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

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
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<h3>Loading data...</h3>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />} />
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
