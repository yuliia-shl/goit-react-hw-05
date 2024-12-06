// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"

const HomePage = ({ trendMovies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendMovies?.map((trendMovie) => (
          <li key={trendMovie.id}>
            <Link>{trendMovie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
