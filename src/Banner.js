import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner({ fetchUrl }) {
    const [movies, setMovies] = useState([])
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/'


    useEffect(() => {
        async function fetchRandomMovie() {
            const request = await axios.get(requests.fetchNetlixOriginals)
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }

        fetchRandomMovie()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) + '...' : str
    }
    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                '${imageBaseUrl}${movies?.backdrop_path}'
                )`,
                backgroundPosition: 'center center'
            }}   >
            <div className='banner__contents'>
                <h1 className='banner__title'>{movies?.title || movies?.name || movies?.original_name} </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(movies?.overview, 150)} </h1>
            </div>
            <div className='banner--fadeButton' />


        </header>
    )
}

export default Banner
