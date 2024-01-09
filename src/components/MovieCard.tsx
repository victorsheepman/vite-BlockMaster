import React, { useState } from 'react'
import { classes, media, style } from 'typestyle';
import { colorNormal, colorYellow, label, labelText } from '../theme';
import { MovieModal } from './MovieModal';

interface MovieCardProps {
    title:string,
    overview:string,
    vote_average:number
    poster_path:string
}
export const MovieCard:React.FC<MovieCardProps> = ({vote_average, poster_path, overview, title}) => {
    const [modal, setModal] = useState(false);
    const handleClick =()=>{
        setModal(true); 
    }
  return (
    <div className={movieCardWrapper} onClick={handleClick}>
        <img  className={movieCardImg} src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" />
        <span className={( classes(label,labelText,vote_average >=7 ? style({border: `3px solid ${colorYellow.toString()}`}): style({border:`3px solid ${colorNormal.toString()}`}))) }>
            {vote_average}
            <img className={style({width:'24px', height:'24px'}, media({maxWidth:600},{width:'14px',height:'14px'}))} src="src/assets/Property 1=star.svg" alt="" />
        </span>
        {
            modal ? 
                <MovieModal 
                    title={title} 
                    overview={overview} 
                    poster_path={poster_path} 
                    vote_average={vote_average} 
                    setModal={setModal} 
                /> 
            : null
        }
    </div>
  )
}

const movieCardWrapper = style(
    {
        height:'330px',
        borderRadius:'8px',
        position:'relative',
    }, 
    media(
        {maxWidth:600},
        {
            height:'120px'
        }
    )
)

const movieCardImg = style(
    {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px'
    }
)

