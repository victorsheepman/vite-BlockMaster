import { useEffect } from 'react'

import { addMovie, useAppDispatch, useAppSelector } from './reducer';
import { MovieList } from './containers/MovieList';
import { MovieCard } from './components/MovieCard';


function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state)=>state.movies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDataApi = async ()=>{
      try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ffae6ceb377fb3d244739ecd9b2c1a1d&page=${state.page}`);
        const json = await res.json();
        dispatch(addMovie(json.results))
      } catch (error) {
        console.log(error);
      }    
    }
    useEffect(()=> {
      getDataApi()  
    },[state.page])
    
    
  return (
    <>
      <MovieList>
          {state.movieList.map(movie =>(<MovieCard key={movie.id} vote_average={movie.vote_average} poster_path={movie.poster_path} />))}
      </MovieList>
    </>
  )
}

export default App