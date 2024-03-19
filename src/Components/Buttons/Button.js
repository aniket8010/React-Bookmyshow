import React from 'react'

export const Button = ({title,isRounded=false}) => {
  return (
      <button className={`border ${isRounded ? "rounded-pill px-3": ""} roboto-medium bg-white a_h13 px-2 py-1 a_redlite_color2`}>{title}</button>
  )
}
