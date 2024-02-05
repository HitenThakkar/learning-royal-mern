import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  const state = useSelector((state) => state);
  console.log("state...", state);
  const myTheme = {
    backgroundColor: state.theme.theme == "dark" ? "black" : "white",
    color: state.theme.theme == "dark" ? "white" : "red",
  };

  return (
    <div style={myTheme}>
        <h1>MOVIES</h1>
        <ul>
          <li>
            <Link to ="/thriller">THRILL</Link>
          </li>
          <li>
          <Link to ="/netflixmovies/comedy">COMEDY</Link>
          </li>
          <li>
          <Link to ="comedy">comedy 1</Link>
          </li>

        </ul>
    </div>
  )
}
