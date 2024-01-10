import { useMemo, useState } from "react"
import { MovieState } from "../reducer"
import { Movie } from "../schema"
import { filterByTitle, removeRepeat } from "../utils"



export const useSearch =(state:MovieState)=>{

    const [search, setSearch] = useState('');  
    const [openModal, setOpenModal] = useState(false);


    const searchMovie = (query:string, list:Movie[]) => {
      if (isNaN(Number(query))) {
        return filterByTitle(query, list)
      }else{
        return []
      }
    }

    const movie:Movie[] = useMemo(() =>{
      const list = searchMovie(search,state.movieList)
      return removeRepeat(list) 
    }, [search, state.movieList])
     
    return {
        movie,
        search,
        setSearch,
        setOpenModal,
        openModal
    }
}