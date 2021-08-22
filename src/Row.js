import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Row.css'
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'
    // https://image.tmdb.org/t/p/w500/
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => {
                    return (
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            src={
                                `${imageBaseUrl}${isLargeRow ? movie && movie.poster_path : movie && movie.backdrop_path}`}
                            alt={movies.name}
                        />
                    )
                })}

            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
