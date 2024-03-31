import React from 'react'
import "./Corporates.css"
import Banner from './Banner'
import Partner from './Partner'
import Records from './Records'
import Promotions from './Promotions'
import Solutions from './Solutions'
import Campaigns from './Campaigns'

export const Corporates = () => {
  return (
    <div>
      <Banner/>
      <div className='container'>
        <Partner/>
        <Records/>
        <Promotions/>
        <Solutions/>
        <div className='d-flex justify-content-between align-items-center bg-white my-3 p-5'>
          <p className='m-0'>Get priority support from the experts in the entertainment industry.</p>
          <button className='a_redlite_color py-3 px-4 text-white btn btn-sm a_sign_btn'>Access the complete suite</button>
        </div>
        <Campaigns/>
      </div>
    </div>
  )
}
