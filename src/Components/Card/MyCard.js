import React from 'react'
import "./MyCard.css"
import { useNavigate } from 'react-router-dom'

export const MyCard = ({ src, name, title1, title2, description, isTitle1Slice = true, isNameSlice = true, movieDetails }) => {
  const navigate = useNavigate()
  console.log(movieDetails)
  const redirectUrlHandler = () => {
    
    //if we have the moviedetails then only redirect to the movie details page
    if (movieDetails) {
      navigate("/details", { state: { ...movieDetails, name } })
    }
  }

  return (
    <div onClick={redirectUrlHandler} >
      <div className="a_top_card mt-5">
        <div className='a_movie_card a_cursor_pointer'>
          <img src={src} alt="" />
        </div>
      </div>
      <div className="a_bottom_card mt-3 ps-2">
        <h5 className='a_h19 '>
          {name && ((name.length < 24 || !isNameSlice) ? name : `${name.slice(0, 24)}...`)}
        </h5>
        <h6 className='roboto-regular a_h13 my-1 text-muted'>
          {title1 && ((title1.length < 18 || !isTitle1Slice) ? title1 : `${title1.slice(0, 18)}...`)}
        </h6>
        {title2 && <h6 className='roboto-regular a_h13 text-muted'>{title2}</h6>}
        <h6 className='roboto-regular a_h13 text-muted'>{description}</h6>
      </div>
    </div>
  )
}
