import { useEffect, useMemo } from 'react'

import { addMovie, useAppDispatch, useAppSelector } from './reducer';
import { MovieList } from './containers/MovieList';
import { MovieCard } from './components/MovieCard';
import { MovieHeader } from './containers/MovieHeader';
import { removeRepeat } from './utils';



function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state)=>state.movies)
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
      
  const list = useMemo(() => {    
    const idList = state.list[state.filter]
    return removeRepeat(state.movieList.filter(i=> idList.includes(i.id)))
  }, [state.filter, state.movieList])     
  return (
    <>
      <MovieHeader />
      <MovieList>
      {list.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        list.map((movie, index) => (
          <MovieCard
            key={index}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
          />
        ))
      )}
      </MovieList>
    </>
  )
}

export default App
