import React, { useEffect, useState } from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
const Navigations = () => {
  const { pathname } = useLocation()
  const [navigation, setNavigation] = useState(<span>Home <HiOutlineArrowLongRight />  Movies</span>)

  useEffect(() => {
    switch (pathname) {
      case "/list-your-shows":
        setNavigation(<span>Online Tickets <HiOutlineArrowLongRight />  List Your Show</span>)
        break;
      case "/corporates":
        setNavigation(<span>Online Tickets <HiOutlineArrowLongRight /> Vouchers</span>)
        break;
      case "/offers":
        setNavigation(<span>Online Tickets <HiOutlineArrowLongRight /> Offers</span>)
        break;
      case "/gift-cards":
        setNavigation(<span>Online Tickets <HiOutlineArrowLongRight /> Giftcards</span>)
        break;
      case "/stream":
        setNavigation(<span>Home <HiOutlineArrowLongRight />  Stream</span>)
        break;
      case "/events":
        setNavigation(<span>Home <HiOutlineArrowLongRight />  Events</span>)
        break;
      case "/plays":
        setNavigation(<span>Home <HiOutlineArrowLongRight />  Plays</span>)
        break;
      case "/sports":
        setNavigation(<span>Home <HiOutlineArrowLongRight />  Sports</span>)
        break;
      case "/activities":
        setNavigation(<span>Home <HiOutlineArrowLongRight /> Activities </span>)
        break;
      default:
        setNavigation(<span>Home <HiOutlineArrowLongRight />  Movies</span>)
        break;
    }
  }, [pathname])
  return (
    <section className='bg-white'>
      <div className="container py-3 text-muted a_h12">
        {navigation}
      </div>
    </section>
  )
}

export default Navigations