import { style } from "typestyle";
import { colorWhite, colorYellow } from "../theme";
import { useState } from "react";
import { ListFilter } from "../schema";
import { setFilter, useAppDispatch } from "../reducer";

export const MovieFilter =()=>{
    const dispatch = useAppDispatch()
    const [isActive, setIsActive] = useState<ListFilter>(ListFilter.All)
    const handlerClick = (filter:ListFilter)=>{
        setIsActive(filter) 
        dispatch(setFilter(filter))
    }
    
    return(
        <ul className={filterWrapper}>
            <li className={filterListItem} onClick={()=>handlerClick(ListFilter.All)}>
                <span className={isActive === ListFilter.All ? filterActive : filterInactive}>Todas</span>    
            </li>
            <li className={filterListItem}onClick={()=>handlerClick(ListFilter.MostValued)} >
                <span className={isActive === ListFilter.MostValued ? filterActive : filterInactive}>Más valoradas</span> 

            </li>
            <li className={filterListItem} onClick={()=>handlerClick(ListFilter.LeastValue)} >
                <span className={isActive === ListFilter.LeastValue ? filterActive : filterInactive}>Menos valoradas</span>
            </li>
        </ul>
    )
}

const filterWrapper = style({
    width: 'auto',
    height: '19px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '19px',
    letterSpacing: '0em',
    textAlign: 'center',
    textDecoration: 'none',
    listStyle: 'none',
});
  
const filterListItem = style({
    marginRight: '48px',
    color: colorWhite.toString(), 
});
  
const filterInactive = style({
    textDecoration: 'none',
    color: colorWhite.toString(), 
});
  
const filterActive = style({
    textDecoration: 'none',
    color: colorYellow.toString(), 
});
  
  