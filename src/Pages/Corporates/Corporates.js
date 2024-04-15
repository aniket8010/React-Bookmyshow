import React from 'react'
import "./Corporates.css"
import Banner from './Banner'
import Partner from './Partner'
import Records from './Records'
import Promotions from './Promotions'
import Solutions from './Solutions'
import Campaigns from './Campaigns'
import OurProducts from './OurProducts'
import BulkBooking from './BulkBooking'
import Tesimonials2 from './Tesimonials2'
import Questions from './Questions'

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
        <OurProducts/>
        <BulkBooking/>
        <Tesimonials2/>
        <Questions/>
      </div>
    </div>
  )
}
