import { useState } from "react"
import { MovieState } from "../reducer"
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
    const [search, setSearch] = useState('');
  
    const [openModal, setOpenModal] = useState(false);


    const searchMovie = (query:string, list:Movie[]) => {
        if (isNaN(Number(query))) {
          return filterByTitle(query, list)
        }else{
          return 'no hay palabra' 
        }
    }

    const movie = searchMovie(search,state.movieList)

    return {
        movie,
        search,
        setSearch,
        setOpenModal,
        openModal
    }
}