
import React, {useState,useEffect} from 'react';
import axios from './axios'
import './row.css'
//import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const baseURL='https://image.tmdb.org/t/p/original/';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState(""); 

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
 
    },[fetchUrl]);

    const opts ={
        height:"390px",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick = (movie)=>{
        console.log(movie.name);
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            // movieTrailer(movie.name || "")
            // .then(url=>{
            //     console.log(url);
            //     const urlParams = new URLSearchParams(new URL(url).search);
                
            //     setTrailerUrl(urlParams.get('v'));
            //     console.log(trailerUrl);
            // })
            // .catch((error)=> console.log(error));
        }
    }

    // console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>

        {/* several poster*/}
        <div className="row_posters">
        {movies.map(movie =>(
            <img key={movie.id} 
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
            src={`${baseURL}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
            alt={movie.name} />
        ))}
        </div>
        {trailerUrl  && <YouTube videoId={trailerUrl} opts={opts} />}
      
    </div>
  );
}

export default Row;
