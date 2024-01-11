import React, { useState } from 'react'
import { classes, media, style } from 'typestyle';
import { label, labelImg, labelText, labelType } from '../theme';
import { MovieModal } from './MovieModal';

interface MovieCardProps {
    title:string,
    overview:string,
    vote_average:number
    poster_path:string
}
export const MovieCard:React.FC<MovieCardProps> = ({vote_average, poster_path, overview, title}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={movieCardWrapper} onClick={() => setIsOpen(true)}>
        <img  className={movieCardImg} src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" />
        <span className={classes(label,labelText,style(labelType(vote_average)))}>
            {vote_average}
            <img className={labelImg} src="assets/Property 1=star.svg" alt="" />
        </span>
        {
            isOpen ? 
                <MovieModal 
                    title={title} 
                    overview={overview} 
                    poster_path={poster_path} 
                    vote_average={vote_average} 
                    setModal={setIsOpen} 
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

