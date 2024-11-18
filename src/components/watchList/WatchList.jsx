import React from 'react'
import './WatchList.css'
import WatchListCard from 'components/WatchListCard/WatchListCard'
import { useMovieContext } from 'components/Context/GlobalContext';
import MwssageEmpty from 'components/Mwssage-Empty/Mwssage-Empty';


const WatchList = () => {
    const MovieContext = useMovieContext()
  return (
    <div className='container WatchListPage '>
        <div className='myWatchlist-Sec'> 
            <h3>My Watch List</h3>
            <h4> <span className="badge badge-secondary ">{MovieContext.watchList.length} MOVIES</span></h4>

        </div>
        <div className='  '>
            {MovieContext.watchList.length > 0  ?
            (<div className='all-cards'>{MovieContext.watchList.map((movie)=>(
                <WatchListCard  key={movie.imdbID} movie={movie} type='WatchList'/>
            ))}  </div> ):
            
            <MwssageEmpty message="No movies added in Watch List ! 🎬 "/>

            
            }
            
            
        </div>
    </div>
  )
}

export default WatchList
