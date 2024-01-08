import React from "react";
import { keyframes, media, style } from "typestyle";
export const MovieList = ({children}:{children:React.ReactNode})=>(
    <div>
        <section className={movieListStyle}>
            {children}
        </section>
    </div>
)

const open = keyframes({
    '0%': { opacity:0 },
    '100%': { opacity:1 }
})
  

const movieListStyle = style(
    {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 240px)',
        gap: '26px',
        placeContent: 'center',
        margin: '3em 0 0 0',
        marginBottom: '30px',
        animationName:open,
        animationDuration:'0.5s',
        animationTimingFunction:'linear',
        animationFillMode:'forwards'
    },
    media(
        {minWidth:500},
        {
            gridTemplateColumns: 'repeat(auto-fill, 80px)',
            gap: '12px',
        }
    ),
    media(
        {minWidth:768},
        {
             gridTemplateColumns: 'repeat(auto-fill, 180px)',
            gap: '12px',
        }
    )
)

