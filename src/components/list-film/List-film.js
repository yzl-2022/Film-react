import './List-film.css'
import Card from '../card-film/Card-film'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function List() {
    const urlFilms = 'https://film-j3by.onrender.com/api/films'

    //update the list of films
    const [ listFilm, setListFilm] = useState([])
    //update filters
    const [paramFilter, setParamFilter] = useState(urlFilms)

    useEffect(()=>{
        async function getListFilm(){
            const res = await fetch(urlFilms)
            const jsonRes = await res.json()
            setListFilm(jsonRes)
        }
        getListFilm()
    },[paramFilter])

    return (
        <div className="content wrapper">
        <h2>Liste des films</h2>
        <ul>
            {listFilm.map( film => <li key={film.id}><Card film={film}/></li> )}           
        </ul>
        </div>
    );
}

export default List