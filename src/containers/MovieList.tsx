import React from "react";
import { media, style } from "typestyle";
import { open } from "../theme";
export const MovieList = ({children}:{children:React.ReactNode})=>(
    <div>
        <section className={movieListStyle}>
            {children}
        </section>
    </div>
)

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
        {maxWidth:600},
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

