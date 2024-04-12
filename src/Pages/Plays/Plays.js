import React from 'react'
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Button } from '../../Components/Buttons/Button';
import { MyCard } from '../../Components/Card/MyCard';

const PlaysData = [
  {
    src: "Image/EventsImages/play1.avif",
    name: "Jar Tar Chi Goshta",
    title1: "Sant Eknath Natya Mandir: Aurangabad",
    title2: "Marathi",
    description:"₹ 300 onwards"
  },
]

export const Plays = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrom", "This Weekend"]
    },
    {
      title: "Language",
      buttons: ["English", "Hindi", "Telugu", "Marathi", "Panjabi",]
    },
    {
      title: "Categories",
      buttons: ["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Music Shows", "Performances"]
    },
    {
      title: "More Filters",
      buttons: ["Online Streaming", "Fast Filling", "Outdoor Events", "Must Attend", "Unmissable Events", "Offers For You"]
    },
    {
      title: "Price",
      buttons: ["Free", "0-500", "501-2000", "Above 2000"]
    }
  ]
  return (
    <section className='bg-light'>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-3 ps-0">
            <h4>Filters</h4>
            {data.map((value,index) => {
              return <FilterComp key={index} buttons={value.buttons} title={value.title} />
            })}
            <Button btnType="outline" title={"Browse by Venues"} />
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Plays In Sambhajinagar"} buttons={["Theatre"]} />
            </div>
            <div className="row">
              {PlaysData.map((value) => {
                return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <MyCard src={value.src} name={value.name} title1={value.title1} title2={value.title2} description={value.description} />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

