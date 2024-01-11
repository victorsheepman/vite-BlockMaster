import { useEffect, useState } from "react";
import { setMovie, useAppDispatch } from "../reducer";


export const useGetData = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState<number>(1)
  
  
    useEffect(() => {
        const getDataApi = async ()=>{
            try {
              const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ffae6ceb377fb3d244739ecd9b2c1a1d&page=${page}`);
              const json = await res.json();
              dispatch(setMovie(json.results))
            } catch (error) {
              console.log(error);
            }    
          }
         getDataApi()

        }, [page])
    
     
    return {
        page, 
        setPage
    }
}