import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Movies.css"

const data = ["m-banner1.avif", "m-banner2.avif", "m-banner3.avif"]
export const Movies = () => {
  return (
    <section style={{background:"#EBEBEB"}}>
      <Carousel interval={1000} infiniteLoop={true}  showStatus={false} showThumbs={false} className='p-3'>
        {data.map((value, index) => {
          return <div key={index}>
            <img className='rounded-3' src={value} alt=''/>
          </div>
        })}
      </Carousel>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-9">
            <div className="bg-succes">
              Movies List
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
