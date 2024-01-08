import React, { useState } from 'react'
import { classes, media, style } from 'typestyle';
import { colorNormal, colorYellow, monstserrat } from '../theme';

interface MovieCardProps {
    vote_average:number
    poster_path:string
}
export const MovieCard:React.FC<MovieCardProps> = ({vote_average, poster_path}) => {
    const [modal, setModal] = useState(false);
    const handleClick =()=>{
        setModal(true); 
    }
  return (
    <div className={movieCardWrapper} onClick={handleClick}>
        <img  className={movieCardImg} src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" />
        <span className={( classes(label,labelText,vote_average >=7 ? style({border: `3px solid ${colorYellow}`}): style({border:`3px solid ${colorNormal}`}))) }>
            {vote_average}
            <img className={style({width:'24px', height:'24px'}, media({maxWidth:600},{width:'14px',height:'14px'}))} src="src/assets/Property 1=star.svg" alt="" />
        </span>
        {modal && <h1>hola</h1>}
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

const label = style(
    {
        position: 'absolute',
        top: '24px',
        left: '0px',
        width: '114px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '0px 50px 50px 0px',
    },
    media(
        {maxWidth:600},
        {
            width: '57px',
            height: '32px',
            top: '8px',
            fontFamily: monstserrat,
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '19px',
            letterSpacing: '0em',
            textAlign: 'left',
        }
    )
)

const labelText = style(
    {
        fontFamily: monstserrat,
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '34px',
        letterSpacing: '0.01em',
        textAlign: 'center',
        color: 'white',
    }
)



