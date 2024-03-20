import React from 'react'

export const Button = ({ title, isRounded = false, btnType = "solid" }) => {
  switch (btnType) {
    case "outline":
      return <button className={`border rounded-2 py-2 ${isRounded ? "rounded-pill px-3" : ""} a_border_red_lite roboto-medium bg-white a_h13 px-2 py-1 a_redlite_color2 w-100`}>{title}</button>

    default:
      return (
        <button className={`border ${isRounded ? "rounded-pill px-3" : ""} roboto-medium bg-white a_h13 px-2 py-1 a_redlite_color2`}>{title}</button>
      )
  }


}
