import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Movies.css"
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';

const carouselData = ["m-banner1.avif", "m-banner2.avif", "m-banner3.avif"]
export const Movies = () => {
  const data = [
    {
      title: "Language",
      buttons: ["Marathi", "Hindi"]
    },
    {
      title: "Genres",
      buttons: ["Drama", "Comedy","Action","Adventure","Family","Romantic","Thriller","Animation","Crime","Political","Supernatural"]
    },
    {
      title: "Formate",
      buttons: ["2D", "3D"]
    }
  ]
  return (
    <section style={{ background: "#EBEBEB" }}>
      <Carousel autoPlay interval={5000} infiniteLoop={true} showStatus={false} showThumbs={false} className='p-3'>
        {carouselData.map((value, index) => {
          return <div key={index}>
            <img className='rounded-3' src={value} alt='' />
          </div>
        })}
      </Carousel>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-3 ps-0">
            <h4>Filters</h4>
            {data.map((value) => {
             return <FilterComp key={value.title} buttons={value.buttons} title={value.title} />
            })}
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Movies In Sambhajinagar"} buttons={["Hindi","Marathi","English"]}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
