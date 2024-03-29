import { media, style } from "typestyle";
import { MovieList } from "../containers"
import { colorBlue, colorWhite, colorYellow, inter } from "../theme";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppSelector } from "../reducer";
import { useSearch } from "../hooks";
import { MovieCard } from "./MovieCard";

interface ModalSearchProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalSearch:React.FC<ModalSearchProps> = ({setModal}) => {
    const [movieSearch, setMovieSearch] = useState<string>('')
    const state = useAppSelector(s=>s.movies)
    const { setSearch, foundMovies} = useSearch(state);
   
    const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMovieSearch(event.target.value)
    }
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setSearch(movieSearch)
    }

    return (
        <div className={modalSearch}>
            <div className={modalHeader}>
                <figure className={modalImg}  onClick={()=>setModal(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711Z" fill="#FED941"/>
                    </svg>

                </figure>
                <form className={searchWrapper} onSubmit={handleSubmit}>
                    <input  className={searchInput} onChange={onSearchValueChange}/>
                    <button className={searchButton} type="submit">
                        <img className={searchImg} src="/Property 1=search.svg" alt="" />
                    </button>
                </form>
            </div>
           {
               foundMovies.length !==0 ?
                
                <MovieList>
                    {foundMovies.map((movie, index)=>(
                       <MovieCard 
                            key={index} 
                            title={movie.title} 
                            overview={movie.overview} 
                            vote_average={movie.vote_average} 
                            poster_path={movie.poster_path} 
                        />
                    ))}
                </MovieList>
                
                :
                <div className={errorContainer}>
                    <figure className={errorFigure}>
                        <img className={errorImg} src="src/assets/error.png" alt="" />
                    </figure>
                    <h3 className={modalErrorTitle}>No se encontraron resultados </h3>
                </div>
           }
        </div>
    )
}


const modalSearch = style({
    padding: '0px',
    zIndex: 1,
    position: 'fixed',
    width: '100%',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    backgroundColor: colorBlue.toString()
});

const modalHeader = style({
    width: '100%',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
})

const modalImg = style({
    width: '24px',
    height: '24px',
    marginRight: '8px',
})

const searchWrapper = style(
    {
    width: 'auto',
    height: '44px',
    display: 'flex',
    },
    media(
        {maxWidth:600},{
            width:'90%'
        }
    )
);

const searchInput = style(
    {
        height: '44px',
        width: '605px',
        borderRadius: '8px 0 0 8px',
        border: `1px solid ${colorYellow.toString()}`,
        paddingLeft: '12px',
    }
)

const searchButton = style({
    width: '72px',
    height: '44px',
    backgroundColor: colorYellow.toString(),
    borderRadius: '0 4px 4px 0',
    border: 'none',
})

const searchImg = style({
    width: '24px',
    height: '24px',
})

const errorContainer = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const errorFigure = style(
    media(
        {maxWidth:600},
        {
            width:'250px',
            margin:'0px'
        }
    )
)
const errorImg = style(
    media(
        {maxWidth:600},
        {
            width:'100%'
        }
    )
)

const modalErrorTitle = style({
    fontFamily: inter, 
    fontSize: '37px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px',
    letterSpacing: '0em',
    textAlign: 'left',
    color:colorWhite.toString()
})