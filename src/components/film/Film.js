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

  /**
   * @function calculateMean -- otherwise use Array.map/reduce
   * @param {Array} arr
   * @returns {number}
   */
  function calculateMean(arr){
    if (arr.length < 1) return 0
    let sum = 0
    for (let i=0 ; i<arr.length ; i++){
      sum += arr[i]
    }
    return Math.floor(sum/arr.length * 100)/100 //limitée à 2 chiffre suite au point
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

  const blocAjoutCommentaire = <form onSubmit={soumettreCommentaire}><textarea placeholder='Ajouter votre commentaires'></textarea><input type='submit' className='btn' value="Soumettre"/></form>

  //==========================
  // eventListeners
  //==========================
  
  async function soumettreNote(e){
    e.preventDefault() //e.preventDefault() for onSubmit

    //1-get vote from the form
    let inputNote = 1 //since the range is [1,5], let's give a default value 1

    const formElements = e.currentTarget.elements

    for (const element of formElements) {
      if(element.type === 'radio' && element.checked) inputNote = element.value
    }

    //2-submit vote to database
    let aNotes

    if(oneFilm.notes){
      aNotes = oneFilm.notes //{notes:[1,1,1...]}
      aNotes.push(parseInt(inputNote))
    }else{
      aNotes = [parseInt(inputNote)]
    }

    //prepare request.body to bypass validation in API-Film (only verify the first 6 elements)
    const updateFilm = {
      titre: oneFilm.titre,
      genres: oneFilm.genres,
      description: oneFilm.description.replace(/&#x27;/g, "'"), //no idea why I got a problem with ' 
      annee: oneFilm.annee,
      realisation: oneFilm.realisation,
      titreVignette: oneFilm.titreVignette,
      notes: aNotes //why creating a new copy and insert it every modification? Because non-relational database?
    }
    if (oneFilm.commentaires) updateFilm.commentaires = oneFilm.commentaires
    
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
          
    e.target.reset() //clear value inside the form
  }

  async function soumettreCommentaire(e){
    e.preventDefault() //e.preventDefault() for onSubmit

    let aCommentaires

    if (oneFilm.commentaires){
      aCommentaires = oneFilm.commentaires
      aCommentaires.push({ commentaire: "J'aime bien ce film", user: 'user1'})
    }else{
      aCommentaires = [{ commentaire: "J'aime bien ce film", user: 'user1'}]
    }

    //prepare request.body to bypass validation in API-Film
    const updateFilm = {
      titre: oneFilm.titre,
      genres: oneFilm.genres,
      description: oneFilm.description.replace(/&#x27;/g, "'"), 
      annee: oneFilm.annee,
      realisation: oneFilm.realisation,
      titreVignette: oneFilm.titreVignette,
      commentaires: aCommentaires
    }
    if (oneFilm.notes) updateFilm.notes = oneFilm.notes

    //update database via PUT request
    const oOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateFilm)
    }

    let putCommentaire = await fetch(urlOneFilm, oOptions) //send the PUT request
    let getOneFilm = await fetch(urlOneFilm) //obtain the updated Film with GET request

    Promise.all([putCommentaire, getOneFilm])
           .then( response => response[1].json() ) //response[0] from PUT; response[1] from GET
           .then( (data) => {
              setOneFilm(data)
              if (data.notes) setNbVote(data.notes.length)
              if (data.notes) setMeanVote(calculateMean(data.notes))
          })
          
    e.target.reset() //clear value inside the form
  }

  return (
    <main className='wrapper'>
      <section className="film">
        <div className="pic"><img src={`/img/${oneFilm.titreVignette}`} alt={`image pour ${oneFilm.titre}`}/></div>
        <div className="txt">
            <h3>{oneFilm.titre}</h3>
            <p className="description">{oneFilm.description && oneFilm.description.replace(/&#x27;/g, "'")}</p>
            <p><span>Année </span> {oneFilm.annee}</p>
            <p><span>Réalisation </span> {oneFilm.realisation}</p>
            <p><span>Genres </span> {oneFilm.genres && oneFilm.genres.length > 0 && oneFilm.genres.join(', ')}</p>
            <form onSubmit={soumettreNote}>
              <label htmlFor="note1"><input type="radio" id="note1" name="note" value="1" checked/> 1 <img src='/icons/star.svg'/></label>
              <label htmlFor="note2"><input type="radio" id="note2" name="note" value="2"/> 2 <img src='/icons/star.svg'/></label>
              <label htmlFor="note3"><input type="radio" id="note3" name="note" value="3"/> 3 <img src='/icons/star.svg'/></label>
              <label htmlFor="note4"><input type="radio" id="note4" name="note" value="4"/> 4 <img src='/icons/star.svg'/></label>
              <label htmlFor="note5"><input type="radio" id="note5" name="note" value="5"/> 5 <img src='/icons/star.svg'/></label>
              <input className='btn' type="submit" value="Vote"/>
            </form>
            <p>nombre de votes: <span> {nbVote ? nbVote : 'Aucun vote enregistré'} </span></p>
            <p>moyenne de votes: <span> {meanVote} </span><img src='/icons/star.svg'/></p>
        </div>
      </section>
      <section className='comment'>
        <ul>
          <li><img src='/icons/account.svg'/><span>username</span>{blocAjoutCommentaire}</li>
          {oneFilm.commentaires && oneFilm.commentaires.map( (item,index) => <li key={index}><img src='/icons/account.svg'/><span>{item.user}</span><p>{item.commentaire}</p></li>)}
        </ul>
      </section>
    </main>
  );
}

export default Film