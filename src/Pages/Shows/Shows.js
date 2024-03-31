import React from 'react'
import { Carousel } from './Carousel'
import { ShowsCards } from './ShowsCards';
import Testimonials from './Testimonials';

function ShowsMainText({ title, desc }) {
  return (
    <div className="text-center">
      <h1 className='fw-bold mb-3'>{title}</h1>
      <p className="w-75 mx-auto a_h18">{desc}</p>
    </div>
  );
}
export const Shows = () => {
  const cardData = [
    {
      imgPath: "Image/ShowsCard/1.avif",
      title: "Performances",
    },
    {
      imgPath: "Image/ShowsCard/2.avif",
      title: "Experiences",
    },
    {
      imgPath: "Image/ShowsCard/3.avif",
      title: "Expositions",
    },
    {
      imgPath: "Image/ShowsCard/4.avif",
      title: "Parties",
    },
    {
      imgPath: "Image/ShowsCard/5.avif",
      title: "Sports",
    },
    {
      imgPath: "Image/ShowsCard/6.avif",
      title: "Confercesses",
    },
  ];
  const cardData2 = [
    {
      imgPath: "Image/ShowsCard/7.avif",
      title: "Online Sales & Marketing",
    },
    {
      imgPath: "Image/ShowsCard/8.avif",
      title: "Pricing",
    },
    {
      imgPath: "Image/ShowsCard/9.avif",
      title: "Food & beverages stalls and the Works!",
    },
    {
      imgPath: "Image/ShowsCard/10.avif",
      title: "Onground support & gate enty management",
    },
    {
      imgPath: "Image/ShowsCard/11.avif",
      title: "Reports & business insights",
    },
    {
      imgPath: "Image/ShowsCard/12.avif",
      title: "POS, RFID, Turnstiles & more...",
    },
  ];

  return (
    <section className='a_shows'>
      <div className='my-3'>
        <Carousel />
      </div>
      <div className='bg-white a_show_wrapper'>
        <div className="a_shows_container mx-auto">
          <ShowsMainText title={"What you can host?"}
            desc={
              "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
            }
          />
          <div className="row">
            {cardData.map((card, index) => {
              return <div key={index} className="col-12 col-md-4 mt-4">
                <ShowsCards background="#ECF5FF" {...card} />
              </div>
            })}
          </div>
          <div className='text-center mt-5'>
            <button style={{ padding: "12px 90px" }} type="button" className="text-white btn btn-sm a_redlite_color a_sign_btn">List your show</button>
          </div>
        </div>
        <div style={{ marginTop: "150px" }} className="a_shows_container mx-auto">
          <ShowsMainText title={"What are the services we offer ?"}
            desc={
              "After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life."
            }
          />
          <div className="row">
            {cardData2.map((card, index) => {
              return <div key={index} className="col-12 col-md-4 mt-4">
                <ShowsCards {...card} />
              </div>
            })}
          </div>
          <p className="mx-auto my-3 text-center" style={{ width: "85%" }}>
            Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.</p>
          <div className='text-center mt-5'>
            <button style={{ padding: "12px 90px" }} type="button" className="text-white btn btn-sm a_redlite_color a_sign_btn">List your show</button>
          </div>
        </div>
        <Testimonials/>
        <div style={{width:"40%", background:"url(Image/ShowsCard/security-imag.avif)"}} className='mx-auto a_security'>
          <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."} />
        </div>
      </div>
    </section>
  )
}
