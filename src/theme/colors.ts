import { color } from "csx"
import { media, style } from "typestyle"
import { monstserrat } from "./fonts"

export const colorBlue = color('#0F0E17')
export const colorBlack = color('#000000')
export const colorYellow = color('#FED941')
export const colorGrey = color('#A7A9BE')
export const colorWhite = color('#FFFFFE')
export const colorNormal = color('#0E3FA9')

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
    }
)



