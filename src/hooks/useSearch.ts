import { useState } from "react"
import { MovieState, setMovie, useAppDispatch } from "../reducer"
import { Movie } from "../schema"

function filterByTitle(title:string, movies:Movie[]) {
    const list:Movie[] = []
    movies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        list.push(movie)
      }
    })
    return list
}

export const useSearch =(state:MovieState)=>{
    const dispatch = useAppDispatch() 
    const [search, setSearch] = useState('');
  
    const [openModal, setOpenModal] = useState(false);


    const searchMovie = (query:string, list:Movie[]) => {
      if (isNaN(Number(query))) {
        return filterByTitle(query, list)
      }else{
        return []
      }
    }

    const movie = searchMovie(search,state.movieList)
    dispatch(setMovie(movie))
    return {
        movie,
        search,
        setSearch,
        setOpenModal,
        openModal
    }
}