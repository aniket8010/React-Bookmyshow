import React from 'react'
import "./MyCard.css"
export const MyCard = ({src,movieName,movieCertificate,language}) => {
  return (
    <div>
        <div className="a_top_card mt-5">
            <div className='a_movie_card a_cursor_pointer'>
                <img src={src} alt="" />
            </div>
        </div>
        <div className="a_bottom_card mt-3 ps-2">
            <h5 className='a_h19'>{movieName}</h5>
            <h6 className='roboto-regular a_h14 my-1 text-muted'>{movieCertificate}</h6>
            <h6 className='roboto-regular a_h14 text-muted'>{language}</h6>
        </div>
    </div>
  )
}
