const key=process.env.REACT_APP_IMDB_API_KEY
const req={
    latest:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trending:`
    https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

}
export default req;