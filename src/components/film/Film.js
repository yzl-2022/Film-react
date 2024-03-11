import './Film.css'

import {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Film() {
  const urlFilms = 'https://film-j3by.onrender.com/api/films'
  const params = useParams()
  const id = params.id
  
  const [oneFilm, setOneFilm] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    async function getOneFilm(){
        const res = await fetch(urlFilms.concat('/', id))
        const jsonRes = await res.json()
        
        if (jsonRes.message){  // if error message exists
          navigate('/404') // there is a delay and it shows the a break page when passing a non-exist ID
          return null
        }else{
          setOneFilm(jsonRes)
        }
    }
    getOneFilm()
  },[]) // re-render when id or comments change, so passing nothing but []

  return (
    <article className='wrapper'>
      <section className="film">
        <div className="pic"><img src={`/img/${oneFilm.titreVignette}`} alt={`image pour ${oneFilm.titre}`}/></div>
        <div className="txt">
            <h3>{oneFilm.titre}</h3>
            <p className="description">{oneFilm.description}</p>
            <p><span>Année </span> {oneFilm.annee}</p>
            <p><span>Réalisation </span> {oneFilm.realisation}</p>
            <p><span>Genres </span> {oneFilm.genres && oneFilm.genres.length > 0 && oneFilm.genres.join(', ')}</p>
        </div>
      </section>
      <section className='comment'>
        <p>comment 1</p>
      </section>
    </article>
  );
}

export default Film