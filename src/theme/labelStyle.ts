import { media, style } from "typestyle"
import { monstserrat } from "./fonts"

export const label = style(
    {
        position: 'absolute',
        top: '24px',
        left: '0px',
        width: '114px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:'2px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '0px 50px 50px 0px',
    },
    media(
        {maxWidth:600},
        {
            width: '57px',
            height: '32px',
            top: '8px',
        }
    )
)

export const labelText = style(
    {
        fontFamily: monstserrat,
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '34px',
        letterSpacing: '0.01em',
        textAlign: 'center',
        color: 'white',
    },
    media(
        {maxWidth:600},
        {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '19px',
            letterSpacing: '0em',
            textAlign: 'left',
        }
    )
)


export const labelImg = style(
    {
        width:'24px',
        height:'24px',
    },
    media(
        {maxWidth:600},
        {
            width:'14px',height:'14px'
        }
    )
)