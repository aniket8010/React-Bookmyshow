import React from 'react'
import "./Carousel.css"
import Flickity from 'react-flickity-component'
import { BannerCard } from './BannerCard'

const flickityOptions = {
    initialIndex: 2,
    wrapAround:true
}

export const Carousel = () => {
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <BannerCard background='#2B3148' imgPath={"Image/ShowsImage/1.avif"} title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
            <BannerCard background='#45443F' imgPath={"Image/ShowsImage/2.avif"} title={"Ticket scanning made easy"} description={"Experience the ease of managing entry at an event."} />
            <BannerCard background='#9E6D4C' imgPath={"Image/ShowsImage/3.avif"} title={"Take advantage of our M-ticket feature"} description={"Lets your audience skip the box office queue and head straight to the gate."} />
            <BannerCard background='#385434' imgPath={"Image/ShowsImage/4.avif"} title={"Empower the artist within you"} description={"List your own performances, gigs and more with BookMyShow"} />
            <BannerCard background='#516C7A' imgPath={"Image/ShowsImage/5.avif"} title={"Conduct workshops and much more"} description={"Share your skills with people around the world - from home!"} />
        </Flickity>

    )
}
