import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGI2MTQyMDFjNTEyMWZlOGI0OWE4NDZmNWVkMjJlNyIsInN1YiI6IjVmNjRlMTk4ZGJjYWRlMDAzNjFlMDU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mAmIKJqHBmQFhfpIGB2PnEeItBtWao6ei-AqTE3tX9Q'
  return req;
})

export default apiMovie;