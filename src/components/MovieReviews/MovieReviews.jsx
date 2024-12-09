import s from "./MovieReviews.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByMovieId } from "../../services/api"

const MovieReviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    if (!movieId) return
    const getData = async () => {
      const data = await fetchReviewsByMovieId(movieId)
      setReviews(data)
    }
    getData()
  }, [movieId])

  if (!reviews) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={s.reviewItem}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie.</p>
      )}
    </div>
  )
}

export default MovieReviews
