import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";

export const ShowsCards = ({imgPath,title,background="#FCF1F1"}) => {
  return (
    <div style={{background}} className='a_shows_card text-center'>
        <div className='a_shows_card_img'>
            <img src={imgPath} alt="" />
        </div>
        <h4>{title}</h4>
        <BsExclamationCircle size={25} className='a_redlite_color2' />
    </div>
  )
}
