const API_KEYS = '12a48185f23cfe8a470b5f90ce5ac93b';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEYS}&language=en-us`,
    fetchNetlixOriginals: `/discover/tv?api_key=${API_KEYS}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEYS}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEYS}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEYS}&with_genres=99`

}


export default requests;