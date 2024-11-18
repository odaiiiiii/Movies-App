

import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='header'>
      <div className="container">
      <Link to="/" className='linkLi'> 
        <h3>Movies</h3>
        </Link>
        <ul className="list-group">
         <Link to="WatchList" className='linkLi'> 
            <li >   
                Watch List
            </li>
            </Link>
            <Link to="Watched" className='linkLi'> 
            <li>
            Watched
            </li>
            </Link>
            <li>
                <Link to="/add">
                <button type="button" className="btn btn-warning">ADD</button>
                </Link>

            </li>
        </ul>
      </div>
    </div>
  )
}
