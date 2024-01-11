import React from 'react'
import { classes, media, style } from 'typestyle'
import { buttonImg, buttonMixin, buttonSmall,  colorWhite, label, labelImg, labelText, labelType, monstserrat, open, porcentaje } from '../theme'

interface MovieModalProps {
    title:string
    overview:string
    poster_path:string
    vote_average:number,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const MovieModal:React.FC<MovieModalProps> = ({title, overview, poster_path, vote_average, setModal}) => {
    const closeModal = (event:React.MouseEvent):void => {
        setModal(false);
        event.stopPropagation();
    }
  return (
    <div className={modalWrapper}>
        <div className={modalContainer}>
            <article className={modalInfo}>
                <h1 className={modalTitle}>{title}</h1>
                <span className={modalOverview}>{overview}</span>
                <div className={modalDate}></div>
                <div className={modalButtonWrapper}>
                    <button className={classes(modalButton, buttonImg, buttonSmall)}>VER AHORA</button>
                    <button className={classes(modalButtonBlack, buttonImg, buttonSmall)}>
                        VER DESPUÉS
                    </button>
                </div>
            </article>
            <article className={modalCard}>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" />
                <span className={classes(label, labelText ,style(labelType(vote_average)))}>
                    {vote_average}
                    <img className={labelImg} src="src/assets/Property 1=star.svg" alt="" />
                </span>
            </article>
            <figure className={modalExit} onClick={closeModal}>
                <img src="src/assets/Property 1=delete.svg" alt="" />
            </figure>
        </div>            
    </div>
  )
}

const modalWrapper = style({
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingLeft: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 2,
    animationName:open,
    animationDuration:'0.5s',
    animationTimingFunction:'linear',
    animationFillMode:'forwards'

},
media(
    {maxWidth:600},
    {padding:'2px 16px'}
)
)

const modalContainer = style(
    {

        width: porcentaje(1200),
        height: '579px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: monstserrat,
        position: 'relative',
       
    },
    media(
        {maxWidth:600},
        {
            width: '100%',
            height: '100%',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            overflow: 'scroll',
            position: 'unset',
        }
    )
)

const modalInfo = style(
    {
        width: '565px',
        height: 'auto',
        color: colorWhite.toString()
    },
    media(
        {maxWidth:600},
        {
            width:'100%',
            paddingTop: '12px',
        }
    )
)

const modalOverview = style(
    {
        height: '135px',
        width: '565.95751953125px',
        marginTop: '8px',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'left',
        marginBottom: '8px',
    },
    media(
        {maxWidth:600},
        {
            fontFamily: monstserrat,
            fontSize: '16px',
            fontStyle: 'normal',
            lineHeight: '19px',
        }
    )
)

const modalDate = style({
    height: '35px',
    width: '349px',
    padding: '8px 0px 0px 0px', 
    marginTop: '8px',
})

const modalButtonWrapper = style(
    {
        height: '48px',
        width: '565.95751953125px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    media(
        {maxWidth:600},
        {
            width: '100%',
            height: '112px',
            alignItems:'center',
            flexDirection: 'column',   
        }
    )
)
const modalTitle = style(
    {
        fontFamily: monstserrat,
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '30px',
        letterSpacing: '0.01em',
        textAlign: 'left',
    }
);

const modalButton = style(buttonMixin('274px', 'rgba(254, 217, 65, 1)'))
const modalButtonBlack = style(buttonMixin('274px','rgba(12, 14, 22, 1)'))

const modalCard = style({
    width: '220px',
    height: '330px',
    borderRadius: '8px',
    position: 'relative',
});
  
const modalExit = style(
    {
        height: '32px',
        width: '32px',
        left: '1251px',
        top: '50px',
        position: 'absolute',
        cursor:'pointer'
    },
    media(
        {maxWidth:600},
        {
            left: '11px',
            top: '5px'
        }
    )
);
