import './Film.css'

import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Film() {
  const urlFilms = 'https://film-j3by.onrender.com/api/films'
  const params = useParams()
  const id = params.id
  
  const [oneFilm, setOneFilm] = useState([])

  useEffect(()=>{
    async function getOneFilm(){
        const res = await fetch(urlFilms.concat('/', id))
        const jsonRes = await res.json()
        setOneFilm(jsonRes)
    }
    getOneFilm()
  },[])

  return (
    <article className='wrapper'>
      <section className="film">
        <div className="pic"><img src={`/img/${oneFilm.titreVignette}`} alt={`image pour ${oneFilm.titre}`}/></div>
        <div className="txt">
            <h3>{oneFilm.titre}</h3>
            <p className="description">{oneFilm.description}</p>
            <p><span>Année </span> {oneFilm.annee}</p>
            <p><span>Réalisation </span> {oneFilm.realisation}</p>
        </div>
      </section>
      <section className='comment'>
        <p>comment 1</p>
      </section>
    </article>
  );
}

export default Film