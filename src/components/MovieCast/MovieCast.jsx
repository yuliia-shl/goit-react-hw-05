import s from "./MovieCast.module.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCreditsByMovieId } from "../../services/api"
import { defaultImg } from "../../pages/MovieDetailsPage/MovieDetailsPage"

export const MovieCast = () => {
  const { movieId } = useParams()
  const [credits, setCredits] = useState(null)

  useEffect(() => {
    if (!movieId) return
    const getData = async () => {
      const data = await fetchCreditsByMovieId(movieId)
      setCredits(data)
    }
    getData()
  }, [movieId])

  if (!credits) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul className={s.castList}>
        {credits.map((credit) => (
          <li key={credit.id} className={s.castItem}>
            <img
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                  : defaultImg
              }
              alt={`${credit.name}'s photo`}
              width={240}
              height={360}
              className={s.castImg}
            />
            <h4>{credit.name}</h4>
            <p>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
