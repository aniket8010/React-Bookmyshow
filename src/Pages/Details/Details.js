import React from 'react'
import "./Details.css"
import { useLocation } from 'react-router-dom'
import Banner from './Banner'
import CastsAndCrew from './CastsAndCrew'

export const Details = () => {
  const { state } = useLocation()

  return (
    <section>
      <Banner />
      <div className="container">
        <div className="w-75">
          <div className='my-3'>
            <h4>About the movie</h4>
            <p className='a_h15 fw-normal my-2'> {state?.description}</p>
          </div>
          <CastsAndCrew data={state?.casts} crewData={state?.crewData} />
        </div>
      </div>
    </section>
  )
}