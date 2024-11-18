import React from 'react';
import './Watched.css';
import { useMovieContext } from 'components/Context/GlobalContext';
import WatchListCard from 'components/WatchListCard/WatchListCard';
import MwssageEmpty from 'components/Mwssage-Empty/Mwssage-Empty';

const Watched = () => {
  const MovieContext = useMovieContext();
  
  // تحقق من أن watched هو مصفوفة لتجنب الأخطاء
  const watchedMovies = Array.isArray(MovieContext.watched) ? MovieContext.watched : [];

  return (
    <div className='container WatchListPage'>
      <div className='myWatchlist-Sec'> 
          <h3>Movies I watched</h3>
          <h4> 
            <span className="badge badge-secondary ">
              {watchedMovies.length} MOVIES
            </span>
          </h4>
      </div>
      <div className='all-cards'>
        {watchedMovies.length > 0 ? (
          watchedMovies.map((movie) => (
            <WatchListCard key={movie.imdbID} movie={movie} type='watched' />
          ))
        ) : (
              <MwssageEmpty message=" No movies added yet! 🎬 "/>
)}
      </div>
    </div>
  );
};

export default Watched;
