import './Film.css'

import {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Film() {
  const urlFilms = 'https://film-j3by.onrender.com/api/films'
  const params = useParams()
  const id = params.id || '1' //supposing id won't change once landing on this page.
  const urlOneFilm = urlFilms.concat('/', id)

  const [oneFilm, setOneFilm] = useState([])
  const [meanVote, setMeanVote] = useState(0)
  const [nbVote, setNbVote] = useState(0)

  const navigate = useNavigate()

  function calculateMean(arr){
    if (arr.length < 1) return 0
    let sum = 0
    for (let i=0 ; i<arr.length ; i++){
      sum += arr[i]
    }
    return sum/arr.length
  }

  useEffect(()=>{
    async function getOneFilm(){
        const res = await fetch(urlOneFilm)
        const jsonRes = await res.json()
        
        if (jsonRes.message){  //if error message exists
          navigate('/404')     //the route '/404' is not defined, but it will work in this way
          return null          //Note: there is a delay and it shows the a broken page when passing a non-existing ID
        }else{
          setOneFilm(jsonRes)
          if (jsonRes.notes) setNbVote(jsonRes.notes.length)
          if (jsonRes.notes) setMeanVote(calculateMean(jsonRes.notes))
        }
    }
    getOneFilm()
  },[]) //re-render when id or comments change? No, use setOneFilm() && another fetch.

  //==========================
  // eventListeners
  //==========================
  
  async function soumettreNote(){
    let aNotes

    if(oneFilm.notes){
      aNotes = oneFilm.notes; //{notes:[1,1,1...]}
      aNotes.push(1)
    }else{
      aNotes = [1]
    }

    //prepare request.body to bypass validation in API-Film
    const updateFilm = {
      titre: oneFilm.titre,
      genres: oneFilm.genres,
      description: oneFilm.description,
      annee: oneFilm.annee,
      realisation: oneFilm.realisation,
      titreVignette: oneFilm.titreVignette,
      notes: aNotes //why creating a new copy and insert it every modification? Because non-relational database?
    }
    
    //update database via PUT request
    const oOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateFilm)
    }

    let putNote = await fetch(urlOneFilm, oOptions) //send the PUT request
    let getOneFilm = await fetch(urlOneFilm) //obtain the updated Film with GET request

    Promise.all([putNote, getOneFilm])
           .then( response => response[1].json() ) //response[0] from PUT; response[1] from GET
           .then( (data) => {
              setOneFilm(data)
              if (data.notes) setNbVote(data.notes.length)
              if (data.notes) setMeanVote(calculateMean(data.notes))
          })
  }


  return (
    <main className='wrapper'>
      <section className="film">
        <div className="pic"><img src={`/img/${oneFilm.titreVignette}`} alt={`image pour ${oneFilm.titre}`}/></div>
        <div className="txt">
            <h3>{oneFilm.titre}</h3>
            <p className="description">{oneFilm.description}</p>
            <p><span>Année </span> {oneFilm.annee}</p>
            <p><span>Réalisation </span> {oneFilm.realisation}</p>
            <p><span>Genres </span> {oneFilm.genres && oneFilm.genres.length > 0 && oneFilm.genres.join(', ')}</p>
            <button className='btn' onClick={soumettreNote}>Vote</button>
            <p>nombre de votes: <span> {nbVote} </span></p>
            <p>moyenne de votes: <span> {meanVote} </span></p>
        </div>
      </section>
      <section className='comment'>
        <p>comment 1</p>
      </section>
    </main>
  );
}

export default Film