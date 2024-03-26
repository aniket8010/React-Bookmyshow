import React from 'react'
import "./Events.css"
import { FilterComp } from '../../Components/Filter/FilterComp';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Button } from '../../Components/Buttons/Button';
import { MyCard } from '../../Components/Card/MyCard';

const EventsData = [
  {
    src: "Image/EventsImages/1.avif",
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Image/EventsImages/2.avif",
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description:"₹ 6999 onwards"
  },
  {
    src: "Image/EventsImages/3.avif",
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Image/EventsImages/4.avif",
    name: "Talk Session in Culinary Arts (Ft. Joao Garcia)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/5.avif",
    name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    title1: "Shanmukhananda Hall: Mumbai.",
    title2: "Stand up Comedy",
    description:"₹ 799 onwards"
  },
  {
    src: "Image/EventsImages/6.avif",
    name: "Red Bull Dance Your Style World Final 2024",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai.",
    title2: "Dance",
    description:"₹ 799 onwards"
  },
  {
    src: "Image/EventsImages/7.avif",
    name: "Comedy Error ",
    title1: "House of Delicacies: Aurangabad",
    title2: "Stand up Comedy",
    description:"₹ 99"
  },
  {
    src: "Image/EventsImages/8.avif",
    name: "Talk Session in Business (Ft. Karthik Gunasekaran)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/9.avif",
    name: "OML Comedy Pit Stop",
    title1: "Multiple Venues",
    title2: "Stand up Comedy",
    description:"₹ 499 "
  },
  {
    src: "Image/EventsImages/10.avif",
    name: "Anupam Kher’s Actor Prepares - Learn Acting",
    title1: "Multiple Venues",
    title2: "Acting",
    description:"₹ 8850"
  },
  {
    src: "Image/EventsImages/11.avif",
    name: "Talk Session in Architecture (Ft. Dennis Pieprz)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/12.avif",
    name: "Magic Beans -Parent Child RHYME & RHYTHM (OFFLINE)",
    title1: "Magic Beans - Kemps Corner: Mumbai",
    title2: "Education",
    description:"₹ 650"
  },
  {
    src: "Image/EventsImages/13.avif",
    name: "Talk Session in Architecture (Ft. Yujie Wang)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/14.avif",
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Image/EventsImages/15.avif",
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description:"₹ 6999 onwards"
  },
  {
    src: "Image/EventsImages/16.avif",
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Image/EventsImages/17.avif",
    name: "Talk Session in Culinary Arts (Ft. Joao Garcia)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/18.avif",
    name: "Red Bull Dance Your Style World Final 2024",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai.",
    title2: "Dance",
    description:"₹ 799 onwards"
  },
  {
    src: "Image/EventsImages/19.avif",
    name: "Comedy Error ",
    title1: "House of Delicacies: Aurangabad",
    title2: "Stand up Comedy",
    description:"₹ 99"
  },
  {
    src: "Image/EventsImages/20.avif",
    name: "Comedy Error ",
    title1: "House of Delicacies: Aurangabad",
    title2: "Stand up Comedy",
    description:"₹ 99"
  },
  {
    src: "Image/EventsImages/11.avif",
    name: "Talk Session in Architecture (Ft. Dennis Pieprz)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Image/EventsImages/12.avif",
    name: "Magic Beans -Parent Child RHYME & RHYTHM (OFFLINE)",
    title1: "Magic Beans - Kemps Corner: Mumbai",
    title2: "Education",
    description:"₹ 650"
  },
]

export const Events = () => {
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
            {data.map((value) => {
              return <FilterComp key={value.title} buttons={value.buttons} title={value.title} />
            })}
            <Button btnType="outline" title={"Browse by Venues"} />
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Events In Sambhajinagar"} buttons={["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Music Shows", "Performances"]} />
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

