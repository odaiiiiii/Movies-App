import React, { useEffect, useRef } from 'react';
import './TopMovies.css';

const images = [
  "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"
];

const TopMovies = () => {
  const cardRefs = useRef([]);

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    cardRefs.current.forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className='content-topMovies'>
        <h2>Top Movies</h2>
        <h5>
          Explore a mix of classic and modern films across genres ,<b>  offering something for every movie lover. </b> 
        </h5>

        <article className="card-top container row ">
          {images.map((item, index) => (
            <img
              key={item}
              ref={el => cardRefs.current[index] = el} 
              className="card-top__background col-lg-3 col-md-4 col-sm-4 col-8"  
              src={item}
              alt="" // Empty alt for decorative images
            />
          ))}
        </article>
      </div>
    </div>
  );
};

export default TopMovies;
