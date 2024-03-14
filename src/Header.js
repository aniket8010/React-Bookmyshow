import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (


        <header>
            <div className='a_top bg-white py-1'>
                <div style={{ width: "84%" }} className="container ">
                    <div className="row w-100 justify-content-between mx-auto d-flex align-items-center">
                        <div className="col-12 col-md-7">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">
                                    <div className="logo">
                                        <img height={65} src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="d-flex align-items-center p-1 px-2 gap-2 border justify-content-start rounded-2">
                                        <CiSearch />
                                        <input type="text" className="border-0 w-100" placeholder="Search for Movies,Events,Plays,Sports and Activities" style={{ flex: 1, outline: "none", fontSize: "14px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{cursor:"pointer"}} className="col-12 col-md-3">
                            <div className="row align-items-center  text-end justify-content-end">
                                <div className="col-12 col-md-10 align-items-center d-flex  justify-content-end gap-4">
                                    <div className='d-flex gap-2'>
                                        <span>Sambhajinagar</span> <IoChevronDownSharp color="#6B7188" className="mt-1" />
                                    </div>
                                    <button type="button" class="text-white btn btn-sm a_redlite_color px-3 a_sign_btn">Sign in</button>
                                </div>
                                <div className="col-12 col-md-2">
                                    <RxHamburgerMenu size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='a_bottom py-2 border-bottom'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            <ul className='d-flex gap-3'>
                                <li><NavLink to={"/"}>Movies</NavLink></li>
                                <li><NavLink to={"/stream"}>Stream</NavLink></li>
                                <li><NavLink to={"/events"}>Events</NavLink></li>
                                <li><NavLink to={"/plays"}>Plays</NavLink></li>
                                <li><NavLink to={"/sports"}>Sports</NavLink></li>
                                <li><NavLink to={"/activities"}>Activities</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <ul className='d-flex gap-3 justify-content-end'>
                                <li>
                                    <span>ListYourShow</span>
                                </li>
                                <li>
                                    <span>Corporate</span>
                                </li>
                                <li>
                                    <span>Offers</span>
                                </li>
                                <li>
                                    <span>Gift Cards</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
