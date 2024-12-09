import { Field, Form, Formik } from "formik"
import MovieList from "../../components/MovieList/MovieList"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchSearchMovies } from "../../services/api"

const MoviesPage = ({ handleSetQuery }) => {
  const [allMovies, setAllMovies] = useState([])
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const query = searchParams.get("query") ?? ""

  const handleSubmit = (value) => {
    handleSetQuery(value.query)
  }

  const initialValues = {
    query: "",
  }

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      setLoading(true)
      try {
        const { results } = await fetchSearchMovies(query)
        setAllMovies(results)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [query])

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  )
  console.log(filteredMovies)

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field type="text" name="query" placeholder="Enter movie name" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {loading && <p>Loading...</p>}

      {!loading && query && filteredMovies.length === 0 && (
        <p>No movies found for &quot;{query}&quot;</p>
      )}
      {!loading && query && filteredMovies.length > 0 && (
        <MovieList trendMovies={filteredMovies} />
      )}
    </>
  )
}

export default MoviesPage
