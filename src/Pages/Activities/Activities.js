import React from 'react'
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Button } from '../../Components/Buttons/Button';
import { MyCard } from '../../Components/Card/MyCard';

const EventsData = [
  {
    src: "Image/Activities/1.avif",
    name: "Wet n Joy Waterpark & Amusement Park",
    title1: "Wet N Joy Water Park: Lonavala",
    title2: "Water parks",
    description: "₹ 884 onwards"
  },
  {
    src: "Image/Activities/2.avif",
    name: "Mythical Parks",
    title1: "Ellora Visiting Center: Aurangabad",
    title2: "Adventure Parks",
    description: "₹ 500 onwards"
  },
  {
    src: "Image/Activities/3.avif",
    name: "Imagicaa Water Park",
    title1: "Imagica Water Park (Khopoli): Mumbai",
    title2: "Theme parks",
    description: "₹ 796 onwards"
  },
  {
    src: "Image/Activities/4.avif",
    name: "Alibaug Beach Camping - LiveB4YouDie",
    title1: "Meeting Point: Mandwa Jetty Parking Lot",
    title2: "Camping",
    description: "₹ 1199 onwards"
  },
  {
    src: "Image/Activities/5.avif",
    name: "Kalsubai Night Trek",
    title1: "Meeting Point: Kasara Railway Station",
    title2: "Trekking",
    description: "₹ 599 onwards"
  },
  {
    src: "Image/Activities/6.avif",
    name: "Della Sky Garden",
    title1: "Della Adventure Park: Lonavala",
    title2: "Buffet",
    description: "₹ 3540"
  },
  {
    src: "Image/Activities/7.avif",
    name: "Meher Retreat - Day Picnic",
    title1: "Meher Retreat: Pune",
    title2: "Resorts",
    description: "₹ 590 onwards"
  },
  {
    src: "Image/Activities/8.avif",
    name: "Mumbai Filmcity Tour with Bollywood Park",
    title1: "Gate No.1, Dadasaheb Phalke Chitranagri: Mumbai",
    title2: "Theme parks",
    description: "₹ 1099 onwards"
  },
  {
    src: "Image/Activities/9.avif",
    name: "Imagicaa Theme Park",
    title1: "Imagica Theme Park (Khopoli): Mumbai",
    title2: "Theme parks",
    description: "₹ 664 onwards"
  },
  {
    src: "Image/Activities/10.avif",
    name: "The Hidden Hour - Escape Games",
    title1: "Multiple Venues",
    title2: "Escape Games",
    description: "₹ 400 onwards"
  },
  {
    src: "Image/Activities/11.avif",
    name: "Imagicaa - A Themed Entertainment Destination",
    title1: "Multiple Venues",
    title2: "Theme parks",
    description: "₹ 664 onwards"
  },
]

export const Activities = () => {
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
    <section className='bg-light'>
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
              <AppliedFilter title={"Activities In Sambhajinagar"} buttons={["Amusement Parks", "Adventure", "Tourist Attractions", "Food and Drinks", "Gaming", "Food and Drinks"]} />
            </div>
            <div className="row">
              {EventsData.map((value) => {
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

