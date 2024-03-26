import React from 'react'
import MultiCarousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { MdChevronRight } from "react-icons/md";

import "./MultiMoviecard.css"
export const MultiMovieCard = ({ title, isShowAll = false, srcData = [] }) => {
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
    return (
        <div className='a_movies_carousel my-5'>
            {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center my-2 mx-1'>
                <h4 className='a_h20 ps-3 fw-bold'>{title}</h4>
                {isShowAll && <div className='a_redlite_color2 d-flex align-items-center'>
                    <span className='a_cursor_pointer a_h14 '>See All</span>
                    <MdChevronRight />
                </div>}
            </div>}

            <MultiCarousel responsive={responsive}>
                {srcData.map((value, index) => {
                    return <div key={index} className='a_carousel_img_box a_cursor_pointer'>
                        <img src={value} alt="" />
                    </div>
                })}
            </MultiCarousel>
        </div >
    )
}
