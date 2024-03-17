import React from 'react'
import { LiaUserAstronautSolid } from "react-icons/lia";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";

export const Services = () => {
  const data = [
    {
      icon: <LiaUserAstronautSolid size={70} />,
      title: "24/7 CUSTOMER CARE"
    },
    {
      icon: <GiTicket size={70} />,
      title: "RESEND BOOKING CONFIRMATION"
    },
    {
      icon: <FaEnvelopeOpenText size={60} className='mb-2' />,
      title: "SUBSCRIBE TO THE NEWSLETTER"
    },
  ]
  return (
    <section className='a_bg_darklite text-white'>
      <div className="container py-3">
        <div className="row ">
          {data.map((value, index, arr) => {
            return <div key={index} className="col-12 col-md-4 text-center a_opacity">
              {value.icon}
              <p className='a_h11 roboto-light mt-3 align-items-center'>{value.title}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
