import React, { useContext } from 'react'
import "./Details.css"
// import { useLocation } from 'react-router-dom'
import Banner from './Banner'
import CastsAndCrew from './CastsAndCrew'
import { GlobalContext } from '../../Provider/Provider'

export const Details = () => {
  // const { state } = useLocation()
  const { values } = useContext(GlobalContext)
  // console.log(values)
  return (
    <section>
      <Banner />
      <div className="container">
        <div className="w-75">
          <div className='my-3'>
            <h4>About the movie</h4>
            <p className='a_h15 fw-normal my-2'> {values?.moviesDetails?.description}</p>
          </div>
          <CastsAndCrew data={values?.moviesDetails?.casts} crewData={values?.moviesDetails?.crewData} />
        </div>
      </div>
    </section>
  )
}