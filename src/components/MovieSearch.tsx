import { media, style } from "typestyle";
import { colorYellow } from "../theme";
import { useSearch } from "../hooks/useSearch";
import { useAppSelector } from "../reducer";
import { FormEvent } from "react";

export const MovieSearch = ()=>{
    const state = useAppSelector(state=>state)
    const { setSearch } = useSearch(state.movies)
    
    let movieSearch = '';    

    //obtener el valor del input
    const onSearchValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        movieSearch = event.target.value;
    }

    //buscar pelicula
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setSearch(movieSearch)
    }
    return(
        <form className={searchWrapper} onSubmit={handleSubmit}>
            <input className={searchInput} onChange={onSearchValueChange} />
            <button className={searchButton} type="submit">
                <img className={searchImg} src="src/assets/icons/Property 1=search.svg" alt="" />
            </button>
        </form>
    )
}
const searchWrapper = style(
    {
        width: 'auto',
        height: '44px',
        display: 'flex',
    },
    media(
        {maxWidth:600},
        {
            width:'90%'
        }
    )
);
  
const searchInput = style({
    height: '44px',
    width: '605px',
    borderRadius: '8px 0 0 8px',
    border: `1px solid ${colorYellow.toString()}`,
    paddingLeft: '12px',
});
  
const searchButton = style({
    width: '72px',
    height: '44px',
    backgroundColor: colorYellow.toString(),
    borderRadius: '0 4px 4px 0',
    border: 'none',
});
  
const searchImg = style({
    width: '24px',
    height: '24px',
});
  