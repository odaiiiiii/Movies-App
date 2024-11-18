import React from 'react'
import './ResultCard.css'
import * as actions from "../Context/ActionTypes"
import { useMovieContext } from 'components/Context/GlobalContext';

const  ResultCard = ({movie}) =>{
  const MovieContext = useMovieContext();


  //  watched او  watchList للتحقق اذا الفلم مخزن لدي في 
  const storedWatchList = MovieContext.watchList.find(
    (mov)=>mov.imdbID === movie.imdbID
  );

  const storeWatched =  MovieContext.watched.find(
    (mov)=> mov.imdbID === movie.imdbID
  );
  const defaultImage = 'https://m.media-amazon.com/images/M/MV5BMDYwNDViNGEtOWM0OC00YmMzLTliMWYtNWVjNWIyOGEyMjU4XkEyXkFqcGc@._V1_QL75_UX190_CR0,4,190,281_.jpg';
  const watchListDisabled = storedWatchList ? true : storeWatched ? true : false
  const watchedDisabled = storeWatched ? true : false
  return (
    <div className='card-content    '>
      <div className='card-poster '>
        
      <img src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : defaultImage} alt={movie.Title} />


      
      </div>
      <div className='card-content-info  '>
       
       <div className='card-title-year'>
       <p>{movie.Title}</p>
       <p>{movie.Year}</p>
       </div>

        <div className='card-content-btn'>
         
          <button disabled={watchListDisabled} type='button' onClick={()=>MovieContext.MoviesDispatch(
            {type:actions.ADD_MOVIE_TO_WATCHLIST,payload:movie}
          )} className="button-64" ><span className="text">Add to WatchList</span></button>
          <button disabled={watchedDisabled}  type='button' onClick={()=>MovieContext.MoviesDispatch(
            {type:actions.ADD_MOVIE_FROM_WATCHED,payload:movie}
          )} className="button-64" ><span className="text">Add To Watched</span></button>

        </div>
      </div>
    </div>
  )
}

export default ResultCard