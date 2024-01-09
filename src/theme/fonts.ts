import { stylesheet } from "typestyle";

export const monstserrat = 'Montserrat, sans-serif'
export const inter = 'Inter, sans-serif'

export const font = stylesheet({
    h1:{
        fontFamily: monstserrat , 
        fontSize: '46px',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: '56px',
        letterSpacing: '0.01em',
        textAlign: 'left',
    },
    h2:{
        fontFamily: monstserrat, 
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '58px',
        letterSpacing: '-0.005em',
        textAlign: 'left',
    },
    h3:{
        fontFamily: inter, 
        fontSize: '37px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '32px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    body1Bold:{
        fontFamily: monstserrat, 
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    body1:{
        fontFamily: monstserrat, 
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    body2Bold:{
        fontFamily: monstserrat, 
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '19px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    body2:{
        fontFamily: monstserrat, 
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '19px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    caption:{
        fontFamily: monstserrat, 
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
    image:{
        borderRadius: '12px'   
    },
    buttonText:{
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '28px',
        letterSpacing: '0px',
        textAlign: 'center',
    }
})

