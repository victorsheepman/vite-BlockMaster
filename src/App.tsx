import { useMemo } from 'react'

import { useAppSelector } from './reducer';

import { removeRepeat } from './utils';

import { classes, media, style } from 'typestyle';
import { buttonMixin } from './theme';
import { useGetData } from './hooks';
import { MovieHeader, MovieList } from './containers';
import { MovieCard } from './components';




function App() {
  const {page, setPage} = useGetData()
  const state = useAppSelector((state)=>state.movies)
 
      
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
      <button className={classes(style(buttonMixin('274px', 'rgba(254, 217, 65, 1)')), buttonLayout)}onClick={()=>setPage(page + 1)}>mas</button>
    </>
  )
}

const buttonLayout = style(
  {    
    marginLeft:'40%',
    marginBottom: '2rem'
  },
  media(
    {maxWidth:600},
    {
      marginLeft:'20%'
    }
  )
)

export default App
