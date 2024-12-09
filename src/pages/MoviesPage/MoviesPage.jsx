import { Field, Form, Formik } from "formik"
import MovieList from "../../components/MovieList/MovieList"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchSearchMovies } from "../../services/api"

const MoviesPage = ({ handleSetQuery }) => {
  const [allMovies, setAllMovies] = useState("")
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query") ?? ""

  const handleSubmit = (value) => {
    handleSetQuery(value.query)
  }
  const initialValues = {
    query: "",
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await fetchSearchMovies(query)
        setAllMovies(results)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [query])

  if (!allMovies) {
    return <p>Loading...</p>
  }

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field type="text" name="query" placeholder="Enter movie name" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {query && filteredMovies.length > 0 && (
        <MovieList trendMovies={filteredMovies} />
      )}{" "}
      {query && filteredMovies.length === 0 && (
        <p>No movies found for &quot;{query}&quot;</p>
      )}
    </>
  )
}

export default MoviesPage
