import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from './store'
import { FilterMovie, Movie } from '../schema'
import { getAllIds, getLeastValuedIds, getMostValuedIds } from '../utils/normalize'
import { movieListMock } from '../mock'
import { RootState } from './store'

type ListMovie = {
    all: number[],
    mostValued: number[],
    leastValued: number[],
}

export interface MovieState {
    movieList: Movie[],
    page:number,
    filter: FilterMovie,
    list: ListMovie
}


const initialState: MovieState = {
  movieList:[],
  page:1,
  filter:FilterMovie.All,
  list:{
    all: getAllIds(movieListMock),
    mostValued: getMostValuedIds(movieListMock),
    leastValued: getLeastValuedIds(movieListMock),
  }
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action:PayloadAction<Movie[]>) => {
        const mostValuedIds = action.payload.filter(i=>i.vote_average >= 7).map(j=>j.id)
        const leastValuedId = action.payload.filter(movie => movie.vote_average < 7).map(movie=>movie.id)
        
        state.movieList.push(...action.payload)
        state.list.all.push(...action.payload.map(movie=>movie.id))
        state.list.leastValued.push(...leastValuedId)
        state.list.mostValued.push(...mostValuedIds)
    },
    setFilter: (state, action: PayloadAction<FilterMovie>) => {
      state.filter = action.payload
    },
    setPage:(state,  action: PayloadAction<number>)=>{
        state.page = action.payload
    }
  },
})

export const { addMovie, setFilter, setPage } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovie = (state: RootState) => state.movies

export default movieSlice.reducer