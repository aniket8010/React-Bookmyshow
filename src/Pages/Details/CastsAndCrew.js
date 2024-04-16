import React from 'react'
import Carousel from 'react-multi-carousel'
import { AboutCard } from '../../Components/AboutCard/AboutCard'

const CastsAndCrew = ({ data = [], crewData = [] }) => {

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

  return (
    <div>
      {data?.length > 0 && <h4 className='my-2 mt-5'>Cast</h4>}
      <Carousel responsive={responsive}>
        {Array.isArray(data) && data.map((ele, index) => {
          return <AboutCard {...ele} key={index} />
        })}
      </Carousel>
      {crewData?.length > 0 && <h4 className='my-2 mt-4'>Crew</h4>}
      <Carousel responsive={responsive}>
        {Array.isArray(crewData) && crewData.map((ele, index) => {
          return <AboutCard {...ele} key={index} />
        })}
      </Carousel>
    </div>
  )
}

export default CastsAndCrew