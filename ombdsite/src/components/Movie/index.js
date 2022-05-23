import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

function Movie(props) {
  const navigate = useNavigate()

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (props.movieId) {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${props.movieId}`)
        setMovieData(response.data)
      } else {
        navigate('/')
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>{movieData.Title ? movieData.Title : "Unknown Title"}</h1>
      <p>{movieData.Title ? movieData.Title : "Unknown Title"} was published in {movieData.Year ? movieData.Year : "Unknown Year"} by {movieData.Director ? movieData.Director : "Unknown Director"} and was written by {movieData.Writer ? movieData.Writer : "WE DO NOT KNOW"}</p>
    </div>
  );
}

export default Movie;