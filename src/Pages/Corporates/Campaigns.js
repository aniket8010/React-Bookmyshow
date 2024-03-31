import React from 'react'
import MultiCarousel from 'react-multi-carousel';

const Campaigns = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const data=[
        {
            imgpath:"11.avif"
        },
        {
            imgpath:"12.avif"
        },
        {
            imgpath:"13.avif"
        },
        {
            imgpath:"14.avif"
        },
        {
            imgpath:"15.avif"
        },
        {
            imgpath:"16.avif"
        },
        {
            imgpath:"17.avif"
        },
        {
            imgpath:"18.avif"
        },
        {
            imgpath:"19.avif"
        },
        {
            imgpath:"20.avif"
        },
        {
            imgpath:"21.avif"
        },
        {
            imgpath:"22.avif"
        },
        {
            imgpath:"23.avif"
        },
    ]
  return (
    <div className='a_movies_carousel'>
        <div className='py-4 bg-white'>
            <h6 className='ms-4 mb-2'>CAMPAIGNS WE’RE PROUD OF</h6>
            <div>
                <MultiCarousel responsive={responsive}>
                    {data.map(({imgpath},index)=>{
                        return <div key={index} className='ps-2 mt-3'>
                            <img src={`Image/Corporates/${imgpath}`} alt="" />
                        </div>
                    })}
                </MultiCarousel>
            </div>
        </div>
    </div>
  )
}

export default Campaigns