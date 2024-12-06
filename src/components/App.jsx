// import { useState } from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"
import HomePage from "../pages/HomePage/HomePage"
import Navigation from "./Navigation/Navigation"
import { Route, Routes } from "react-router-dom"
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"
import MovieReviews from "./MovieReviews/MovieReviews"
import { MovieCast } from "./MovieCast/MovieCast"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import axios from "axios"

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MovieDetailsPage />}>
            {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
