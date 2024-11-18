import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from 'axios'
import ResultCard from '../Result-Card/ResultCard'
function Add() {
  const [searchValue,setSearchValue]= useState("")
  const [movies ,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=6edcf722`)
    .then((res)=>{
    if(res.data.Search){
      setMovies(res.data.Search)
    }
    }).catch((error)=>{
      console.log(error)
    })
  },[searchValue])


  return (
    <div>
      
      <nav className="navbar navbar-light ">
        <form className="form-inline ">
           <div className='searchBox'>
           <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" 
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />

            <button className="btn btn-warning my-2 " type="button">Search</button>
           </div>

          {
            movies.length > 0  && <ul>
              {movies.map((movie)=>(
                  <div className='' key={movie.imdbID}>
                    <ResultCard movie={movie}/>
                    </div>
              ))}
            </ul>
          }
        </form>
        
        </nav>
        

    </div>
  )
}

export default Add
