const APIKEY = "bf2b17e8c27971c5d2d7ac971f3ab758";

const requests ={
    fetchTrendings: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchAction: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${APIKEY}&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchDocumentary: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchScienceFriction: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
    fetchThrill: `/discover/movie?api_key=${APIKEY}&with_genres=53`

}

export default requests; 