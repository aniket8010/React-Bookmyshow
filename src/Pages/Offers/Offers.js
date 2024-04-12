import React, { useEffect, useState } from 'react'
import "./Offers.css"
import { CiSearch } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { SiBookmyshow } from "react-icons/si";
import { TfiWallet } from "react-icons/tfi";
import { FaAward } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import OfferCard from './OfferCard';
import { offersData } from './OffersData';

export const Offers = () => {
  const [activeFilters, setActiveFilters] = useState(["creditCard", "debitCard", "bookMyShow", "wallet", "rewards", "upi", "payLater"])
  const [searchValue, setSearchValue] = useState("")
  const [cardsData, setCardsData] = useState(offersData)

  const data = [
    {
      icon: <CiCreditCard1 size={35} />,
      title: "Credit Card",
      cardType: "creditCard"
    },
    {
      icon: <IoCardOutline size={33} />,
      title: "Debit Card",
      cardType: "debitCard"
    },
    {
      icon: <SiBookmyshow size={30} />,
      title: "BookMyShow",
      cardType: "bookMyShow"
    },
    {
      icon: <TfiWallet size={30} />,
      title: "Wallet",
      cardType: "wallet"
    },
    {
      icon: <FaAward size={30} />,
      title: "Rewards",
      cardType: "rewards"
    },
    {
      icon: <FaGooglePay size={40} />,
      title: "UPI",
      cardType: "upi"
    },
    {
      icon: <FaRupeeSign size={25} />,
      title: "Pay Later",
      cardType: "paylater"
    },
  ]

  function filtersHandler(cardType) {
    if (activeFilters.includes(cardType)) {
      const newData = activeFilters.filter((ele) => {
        return ele !== cardType
      })
      setActiveFilters(newData)
    } else {
      setActiveFilters([...activeFilters, cardType])
    }
  }
  function inputHandler(event) {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    const searchTime = setTimeout(() => {
      const newdata = offersData.filter(({ title }) => {
        return title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setCardsData(newdata)
    }, 1000)
    return () => clearTimeout(searchTime)
  }, [searchValue])

  return (
    <section className='a_offers'>
      <div className="bg-white py-4">
        <div className="container">
          <div className="a_search">
            <input onChange={inputHandler} value={searchValue} type="text" placeholder='Search for Offers by Name or Bank' />
            <div className='a_search_icon'>
              <CiSearch />
            </div>
          </div>
          <div className="a_filters mx-auto">
            <h6>FILTER OFFERS BY</h6>
            <div className='d-flex justify-content-between mt-2'>
              {data.map(({ icon, title, cardType }, index) => {
                const isActive = activeFilters.includes(cardType)
                return <div onClick={() => { filtersHandler(cardType) }} key={index} className="a_card_wrapper ">
                  <div className='a_cards'>{icon}</div>
                  <small className={`a_small ${isActive ? "Active" : ""}`}>{title}</small>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2 d-flex flex-wrap gap-3">
        {cardsData?.map((ele, index) => {
          if (activeFilters.includes(ele.cardType)) {
            return <div key={index} className='a_offersCard_col'>
              <OfferCard {...ele} />
            </div>
          } else {
            return null
          }
        })}
      </div>
    </section>
  )
}
