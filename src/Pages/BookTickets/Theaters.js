import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { ImMobile2 } from "react-icons/im";
import { BsExclamationCircle } from "react-icons/bs";
import PriceandTime from './PriceandTime';

export const Theaters = () => {
  const [isFillHeart, setIsFeelHeart] = useState(false)

  function heartHandlerEnter() {
    setIsFeelHeart(true)
  }

  function heartHandlerLeave() {
    setIsFeelHeart(false)
  }
  return (
    <div className='a_theaters'>
      <div className="a_availabilty border-bottom a_h11 d-flex align-items-center py-2 justify-content-end gap-2 p-2">
        <div className=' d-flex align-items-center gap-1'>
          <GoDotFill size={16} color='#4ABD5D' />
          <h6 className='a_h10 roboto-regular'>AVAILBALE</h6>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <GoDotFill size={16} color='#FF6600' />
          <h6 className='a_h10 roboto-regular'>FAST FILLING</h6>
        </div>
        <div className='d-flex align-items-center gap-1'>
          <div style={{ lineHeight: 1 }} className='border-success border px-2 text-success'>
            <span className='a_h9 '>LAN</span>
          </div>
          <h6 className='a_h10 roboto-regular'>SUBTITLES LANGUAGE</h6>
        </div>
      </div>
      <div className="row py-3 ps-4 d-flex align-items-center">
        <div className="col-12 col-md-3 d-flex gap-3">
          <div onMouseLeave={heartHandlerLeave} onMouseEnter={heartHandlerEnter} className='a_heart a_line_h1'>
            {isFillHeart ? <FaHeart color='#F84464' size={20} cursor={"pointer"} /> : <CiHeart size={20} cursor={"pointer"} />}
          </div>
          <div>
            <h6 className='a_theater_name a_h13 m-0 a_cursor_pointer'>INOX:Prozone Mall, Aurangabad</h6>
            <div className='d-flex gap-4'>
              <div className='a_m_ticket text-success d-flex align-items-center gap-2 mt-3'>
                <ImMobile2 />
                <h6 className='a_h13 m-0'>M-Ticket</h6>
              </div>
              <div className='a_beverage text-warning d-flex align-items-center gap-2 mt-3'>
                <IoFastFoodOutline />
                <h6 className='a_h13 m-0'>Food Beverage</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1 ">
          <div className='a_info text-secondary d-flex align-items-center gap-2'>
            <BsExclamationCircle size={14} />
            <h6 className='a_h11 m-0'>INFO</h6>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="d-flex flex-wrap gap-3">
            <PriceandTime />
            <PriceandTime />
            <PriceandTime />
            <PriceandTime />
          </div>
          <div className=' d-flex mt-2 align-items-center text-secondary  gap-1'>
            <GoDotFill size={16} color='#FFC610' />
            <h6 className='a_h12  roboto-regular'>Cancellation Available</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
