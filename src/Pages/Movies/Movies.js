import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Movies.css"
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Button } from '../../Components/Buttons/Button';
import { HeadingBanner } from '../../Components/Banners/HeadingBanner';
import { MyCard } from '../../Components/Card/MyCard';

const MoviesData = [
  {
    src: "Image/Yodhabanner.avif",
    movieName: "Yodha",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "Image/ShaitanBanner.avif",
    movieName: "Shaitaan",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "Image/Kungfupandabanner.avif",
    movieName: "Kung Fu Panda 4",
    movieCertificate: "U",
    language: "English, Hindi, Tamil, Telugu",
  },
  {
    src: "Image/Artical370banner.avif",
    movieName: "Article 370",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "Image/Bastar.avif",
    movieName: "Bastar: The Naxal Story",
    movieCertificate: "A",
    language: "Hindi, Telugu",
  },
  {
    src: "Image/Unnsawali.avif",
    movieName: "Unn Sawali",
    movieCertificate: "UA",
    language: "Marathi",
  },
  {
    src: "Image/Laapata.avif",
    movieName: "Laapataa Ladies",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "Image/trailerrunnunh.avif",
    movieName: "Trailers Screening Show",
    movieCertificate: "UA",
    language: "Multi Language",
  },
  {
    src: "Image/ole ole.avif",
    movieName: "Ole Aale",
    movieCertificate: "U",
    language: "Marathi",
  },
  {
    src: "Image/teri bato main.avif",
    movieName: "Teri Baton Mein Aisa Uljha Jiya",
    movieCertificate: "UA",
    language: "Hindi",
  },
]

const carouselData = ["m-banner1.avif", "m-banner2.avif", "m-banner3.avif"]
export const Movies = () => {
  const data = [
    {
      title: "Language",
      buttons: ["Marathi", "Hindi"]
    },
    {
      title: "Genres",
      buttons: ["Drama", "Comedy", "Action", "Adventure", "Family", "Romantic", "Thriller", "Animation", "Crime", "Political", "Supernatural"]
    },
    {
      title: "Formate",
      buttons: ["2D", "3D"]
    }
  ]
  return (
    <section className='bg-light'>
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
            <Button btnType="outline" title={"Browse by Cinemas"} />
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Movies In Sambhajinagar"} buttons={["Hindi", "Marathi", "English","Multi Language"]} />
            </div>
            <div>
              <HeadingBanner title2={"Explore Upcomming Movies"}
                title={"Comming Soon"}
              />
            </div>
            <div className="row">
              {MoviesData.map((value) => {
                return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <MyCard src={value.src} movieName={value.movieName} movieCertificate={value.movieCertificate} language={value.language}/>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
