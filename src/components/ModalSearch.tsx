import { media, style } from "typestyle";
import { MovieList } from "../containers/MovieList"
import { colorBlue, colorYellow } from "../theme";
import React from "react";

interface ModalSearchProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalSearch:React.FC<ModalSearchProps> = ({setModal}) => {
    return (
        <div className={modalSearch}>
            <div className={modalHeader}>
                <figure className={modalImg}  onClick={()=>setModal(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711Z" fill="#FED941"/>
                    </svg>

                </figure>
                <form className={searchWrapper}>
                    <input  className={searchInput} />
                    <button className={searchButton} type="submit">
                        <img className={searchImg} src="assets/icons/Property 1=search.svg" alt="" />
                    </button>
                </form>
            </div>
           {
               [].length !==0 ?
                
                <MovieList>
                    {[].map(()=>(
                       <h1>hola</h1>
                    ))}
                </MovieList>
                
                :
                <p>error</p>
           }
        </div>
    )
}


const modalSearch = style({
    padding: '0px',
    zIndex: 1,
    position: 'fixed',
    width: '100%',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    backgroundColor: colorBlue.toString()
});

const modalHeader = style({
    width: '100%',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
})

const modalImg = style({
    width: '24px',
    height: '24px',
    marginRight: '8px',
})

const searchWrapper = style(
    {
    width: 'auto',
    height: '44px',
    display: 'flex',
    },
    media(
        {maxWidth:600},{
            width:'90%'
        }
    )
);

const searchInput = style(
    {
        height: '44px',
        width: '605px',
        borderRadius: '8px 0 0 8px',
        border: `1px solid ${colorYellow.toString()}`,
        paddingLeft: '12px',
    }
)

const searchButton = style({
    width: '72px',
    height: '44px',
    backgroundColor: colorYellow.toString(),
    borderRadius: '0 4px 4px 0',
    border: 'none',
})

const searchImg = style({
    width: '24px',
    height: '24px',
})