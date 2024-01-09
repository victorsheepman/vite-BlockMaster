import { keyframes, media, style } from "typestyle";
import { CSSProperties } from "typestyle/lib/types";

export const buttonMixin = (width: string, color:string):CSSProperties => {
    const isDark = color === 'rgba(12, 14, 22, 1)' ? true : false
    return {
        width: width, 
        height: '48px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDark? color : 'rgba(254, 217, 65, 1)',
        color: isDark ? 'rgba(254, 217, 65, 1)' : 'rgba(12, 14, 22, 1)',
        border: isDark ? '1px solid rgba(254, 217, 65, 1)' : 'none',
    };
}

export const buttonImg = style(
    {
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '8px'
    }
)

export const buttonSmall = style(
   media(
    {maxWidth:600},
    {
        width:'100%',
        borderRadius:'4px'
    }
   )
)

export const open = keyframes({
    '0%': { opacity:0 },
    '100%': { opacity:1 }
})
  



export const porcentaje = ($width:number) =>{
    const result = $width * 100/1366
    return  `${result}%`;
}