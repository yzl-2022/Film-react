import './List-film.css'
import Card from '../card-film/Card-film'

import { useEffect, useState } from 'react'

function List() {
    const urlFilms = 'https://film-j3by.onrender.com/api/films'

    /******************************
     * useState
     ******************************/

    //update the list of films
    const [ listFilm, setListFilm] = useState([])
    //update filters
    //const [paramFilter, setParamFilter] = useState(urlFilms)

    /******************************
     * useEffect
     ******************************/
    useEffect(()=>{
        async function getListFilm(){
            const res = await fetch(urlFilms)
            const jsonRes = await res.json()
            setListFilm(jsonRes)
        }
        getListFilm()
    },[])

    /******************************
     * eventListener
     ******************************/

    /******************************
     * JSX
     ******************************/
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