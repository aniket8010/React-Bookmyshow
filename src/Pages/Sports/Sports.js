import React from 'react'
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Button } from '../../Components/Buttons/Button';
import { MyCard } from '../../Components/Card/MyCard';

const SportsData = [
  {
    src: "Image/SportImage/1.avif",
    name: "Mumbai Indians VS Rajasthan Royals",
    title1: "Wankhede Stadium: Mumbai",
    title2: "T20",
    description:"₹ 990 onwards"
  },
  {
    src: "Image/SportImage/2.avif",
    name: "Lucknow Super Giants vs Gujarat Titans",
    title1: "BRSABV Ekana Cricket Stadium: Lucknow",
    title2: "T20",
    description:"₹ 399 onwards"
  },
  {
    src: "Image/SportImage/3.avif",
    name: "Run for Equality - Get Medal by Courier",
    title1: "Your Place and Your Time: India",
    title2: "5k",
    description:"₹ 390"
  },
  {
    src: "Image/SportImage/4.avif",
    name: "Lucknow Super Giants vs Punjab Kings",
    title1: "BRSABV Ekana Cricket Stadium: Lucknow",
    title2: "T20",
    description:"₹ 390 onwards"
  },
  {
    src: "Image/SportImage/5.avif",
    name: "All India Quick Chess Championship by Malsar.in",
    title1: "Your Place and Your Time: India",
    title2: "Chess",
    description:"₹ 249"
  },
  {
    src: "Image/SportImage/6.avif",
    name: "Gujarat Polo Cup",
    title1: "Khyati Homes: Ahmedabad",
    title2: "Polo",
    description:"₹ 1500 onwards"
  },
  {
    src: "Image/SportImage/7.avif",
    name: "Rajasthan Royals vs Delhi Capitals",
    title1: "Sawai Mansingh Stadium: Jaipur",
    title2: "T20",
    description:"₹ 1200 onwards"
  },
  {
    src: "Image/SportImage/8.avif",
    name: "21 Days Walking Challenge by Malsar.in",
    title1: "Your Place and Your Time: Mumbai",
    title2: "Marathon",
    description:"₹ 149"
  },
  {
    src: "Image/SportImage/9.avif",
    name: "Mumbai City FC vs Odisha FC",
    title1: "Mumbai Football Arena: Andheri West",
    title2: "Football",
    description:"₹ 199 onwards"
  },
  {
    src: "Image/SportImage/10.avif",
    name: "ISL Season 2023-24 - CHENNAIYIN FC ( Chennai )",
    title1: "Multiple Venues",
    title2: "Football",
    description:"₹ 150 onwards"
  },
  {
    src: "Image/SportImage/11.avif",
    name: "Mumbai City FC - ISL Season 2023/24",
    title1: "Multiple Venues",
    title2: "Football",
    description:"₹ 199 onwards"
  },
  {
    src: "Image/SportImage/12.avif",
    name: "Indian Premier League All Matches",
    title1: "Indian Premier League All Matches",
    title2: "T20",
    description:"₹ 399 onwards"
  },
]
export const Sports = () => {

  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrom", "This Weekend"]
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
    <section className='a_sports'>
      <div className="a_top py-2">
        <div className="container">
          <div className='w-100'>
            <img src="Image/EventsImages/sporttopimg.avif" className='rounded-3' width={"100%"} alt="" />
          </div>
        </div>
      </div>
      <div className="a_bottom bg-light p-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-3 ps-0">
            <h4>Filters</h4>
            {data.map((value) => {
              return <FilterComp key={value.title} buttons={value.buttons} title={value.title} />
            })}
            <Button btnType="outline" title={"Browse by Venues"} />
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Sports In Sambhajinagar"} buttons={["Cricket", "Football", "Running", "Chess", "Polo"]} />
            </div>
            <div className="row">
              {SportsData.map((value) => {
                return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <MyCard src={value.src} name={value.name} title1={value.title1} title2={value.title2} description={value.description} />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
