import React from 'react'
import './Home.css'
import MoviesType from 'components/MoviesType/MoviesType'
import TopMovies from 'components/TopMovies/TopMovies'
const Home = () => {
  return (
    <div>
        <div className='container welcomeSection'>
            <h1>🎬 Welcome to the World of Movies!</h1>
            <div className='welcomeSection-paragraphs'>
            <p>Discover the best movies and series tailored to your taste. Create your personalized watchlists, explore top-rated films, and enjoy a unique cinematic experience.🎥</p>
            <p >Join us now and start your cinematic journey with endless entertainment at your fingertips. 🌟</p>
            <p>Explore new genres, find hidden gems, and enjoy an immersive movie-watching experience like never before.</p>
            </div>
         </div>
 

         <div className='container moviesTypeSection'>
          
         
           

        <div>
        <TopMovies/>

        </div>

        <div>
          <h2>What We Offer            </h2>
             <h5 className='px-2 py-2'>We offer a wide selection of movies  <b>Enjoy films from all genres, catering to every taste.</b></h5>
   
            <div className=' movies-type'>

                <MoviesType/>
                
            </div>
          </div>

      </div>

    </div>
  )
}

export default Home
