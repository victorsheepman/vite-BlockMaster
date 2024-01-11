import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ListFilter, Movie } from '../schema'
import { getAllIds, getLeastValuedIds, getMostValuedIds } from '../utils/maps'
import { movieListMock } from '../mock'
import { RootState } from './store'

type MovieList = {
    all: number[],
    mostValued: number[],
    leastValued: number[],
}

export interface MovieState {
    movieList: Movie[],
    filter: ListFilter,
    list: MovieList
}


const initialState: MovieState = {
  movieList:[],
  filter: ListFilter.All,
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
    setMovie: (state, action:PayloadAction<Movie[]>) => {
        const mostValuedId = action.payload.filter(movie => movie.vote_average >= 7).map( movie => movie.id)
        const leastValuedId = action.payload.filter(movie => movie.vote_average < 7).map(movie => movie.id)
        const allValuedId = action.payload.map(movie => movie.id)

        state.movieList.push(...action.payload)
        state.list.all.push(...allValuedId)
        state.list.leastValued.push(...leastValuedId)
        state.list.mostValued.push(...mostValuedId)
    },
    setFilter: (state, action: PayloadAction<ListFilter>) => {
      state.filter = action.payload
    },
  },
})

export const { setMovie, setFilter } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovie = (state: RootState) => state.movies

export default movieSlice.reducer