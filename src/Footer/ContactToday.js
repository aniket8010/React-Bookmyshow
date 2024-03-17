import React from 'react'
import { GiHut } from "react-icons/gi";

export const ContactToday = () => {
  return (
    <section className='a_bg_dark text-white py-4'>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-8">
            <div className='d-flex gap-4 align-items-center'>
              <GiHut/>
              <h6 className='fw-bold'>List your Show</h6>
              <h6>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h6>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <button className='a_bg_redlite text-white p-2 px-4 rounded-3 border-0'>Contact Today!</button>
          </div>
        </div>
      </div>
    </section>
  )
}
