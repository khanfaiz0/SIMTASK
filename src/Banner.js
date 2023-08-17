import React, {useState, useEffect} from 'react';
import axios from './axios';
import './banner.css'
//import requests from './request';

const baseURL='https://image.tmdb.org/t/p/original';
    
function Banner({fetchUrl}) {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){

            const request = await axios.get(fetchUrl)
    
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return
        }
        fetchData();
        
    },[]);
   // console.log(movie)
   function truncate(str, n){

    if(str.length > n){
        return str.substr(0,n-1)+'...';
    }
    else{
        return str;
    }
   }
    
    
  return (
    <header className='banner'
    style={{
    backgroundSize:"cover",
    backgroundImage: `url("${baseURL}${movie.backdrop_path}")`,
    backgroundPosition:"center center"}}>

        <div className="banner_contents">
            <h1 className='banner_title'>
                {movie.name || movie.origin_name || movie.title}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_discription">{movie.overview}</h1>
        </div>

        <div className="banner-fadeBottom"/>

    </header>
  );
}

export default Banner;
