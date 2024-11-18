import React from 'react'
import './MovieControles.css'
import { useMovieContext } from 'components/Context/GlobalContext'
import * as actions from '../Context/ActionTypes'
const MovieControles = ({movie,type}) => {
  const MovieContext =  useMovieContext()
  return (
    <div >
        {type === 'WatchList' && (
            <> 
            <button className='ctrl-btn'
            onClick={()=>MovieContext.MoviesDispatch({
              type: actions.ADD_MOVIE_FROM_WATCHED,
              payload:movie
            })}
            >
            <i className="fa-solid fa-eye"/>
            </button>

            <button className='ctrl-btn'
            onClick={()=>
              MovieContext.MoviesDispatch({
                type :  actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload:movie.imdbID
              })
            } 
            >
            <i  className="fa-solid fa-xmark"></i>    
           </button>
            </>
        )
        } 
      

      {type === 'watched' && (
            <>
            <button className='ctrl-btn'
            onClick={()=>MovieContext.MoviesDispatch({
              type: actions.MOVE_MOVIE_TO_WATCHLIST,
              payload:movie
            })}
            >
            
            <i className="fa-solid fa-eye-slash"/>
            </button>

            <button className='ctrl-btn'
            onClick={()=>
              MovieContext.MoviesDispatch({
                type :  actions.REMOVE_MOVIE_FROM_WATCHED,
                payload:movie.imdbID
              })
            } 
            >
            <i  className="fa-solid fa-xmark"></i>    
           </button>
            </>
        )
        } 
    </div>
  )
}

export default MovieControles
