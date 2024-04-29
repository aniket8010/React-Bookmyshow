import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import MyDropdown from '../../Components/MyDropDown/MyDropdown';
import { useLocation } from 'react-router-dom';
import { removeSpecialCharacters } from '../../Lib/Helpers';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function DateBox({ day, date, month, isActive = false }) {
  return <div className={`a_date_box ${isActive ? "active" : ""}`}>
    <h6 className='a_day'>{day?.toUpperCase()}</h6>
    <h6 className='a_date'>{date}</h6>
    <h6 className='a_month'>{month?.toUpperCase()}</h6>
  </div>
}
export const Filters = () => {
  const { state ,search} = useLocation()
  const [dateData, setDateData] = useState([])
  let date = new Date().getDate()
  const params =new URLSearchParams(search)

  useEffect(() => {
    const result = []
    const lastDate = new Date(state?.lastDate).getDate()

    for (let i = date; i <= lastDate; i++) {
      let originalDate = new Date()
      originalDate.setDate(i)
      const [day, month, date] = originalDate.toString().split(" ")
      result.push({ day, month, date: Number(date) })
    }
    setDateData(result)
  }, [date, state?.lastDate])

  const priceData = [
    { lable: "Rs. 0-100", value: "0-100" },
    { lable: "Rs. 101-200", value: "101-200" }
  ]

  const showData = [
    {
      lable: (
        <span className='a_flex_between'>
          Morning <span></span>12:00-11:59 AM
        </span>
      ),
      value: "12:00-11:59 AM",
    },
    {
      lable: (
        <span className='a_flex_between'>
          Afternoon <span></span>12:00-3:59 PM
        </span>
      ),
      value: "12:00-3:59 PM",
    }
  ]

  function showTimehandler(value) {
    // console.log(value, "I from showTimehandler");
  }
  function priceHandler(value) {
    // console.log(value, "I from priceHandler");
  }

  return (
    <div>
      <div className="row justify-content-between align-items-center a_date_range_box">
        <div className="col-12 col-md-3">
          <Carousel responsive={responsive}>
            {dateData?.map((ele) => {
              return <DateBox isActive={ele?.date === date} key={ele?.date}{...ele} />
            })}
          </Carousel>
        </div>
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="border-start p-3 h-100 a_filter_dropdown_box a_cursor_pointer ">
                <h6 className='m-0'>{params.get("language")}-{removeSpecialCharacters(params.get("screen"))}</h6>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className='border-start p-3 h-100 a_filter_dropdown_box'>
                <MyDropdown onFilterChange={priceHandler} initialValue={["0-100"]} title={"Filter Price Range"} data={priceData} />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className='a_filter_dropdown_box border-start p-3 h-100'>
                <MyDropdown onFilterChange={showTimehandler} initialValue={["12:00-3:59 PM"]} title={"Filter Show Timings"} data={showData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
