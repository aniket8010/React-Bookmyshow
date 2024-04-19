import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { HiOutlineChevronRight } from "react-icons/hi";
import { eleCommaTitle, redirectValidPath } from '../../Lib/Helpers';
import { GoDotFill } from "react-icons/go";
import { MdOutlineShare } from "react-icons/md";


const Banner = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    function BookTicketsHandler() {
        navigate("/book-tickets", { state: { name: state?.name, languages: state?.languages, screens: state?.screens, certification: state?.slugInfo?.certification, category: state?.slugInfo?.category, lastDate: state?.lastDate } })
    }
    return (
        <div className="a_movies_details"
            style={{
                backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${state.bannerImgUrl})`,
            }} >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-8">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-4">
                                <div>
                                    <div className='a_img_box'>
                                        <img src={state?.poster} alt="" />
                                    </div>
                                    <div className="bg-dark text-center text-white py-1">
                                        <h6 className="a_h12">In cinemas</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-white">
                                <h1>{state?.name}</h1>
                                <div className='a_rating_box p-3 px-4 rounded-3 justify-content-between d-flex align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <IoMdStar size={25} className='a_redlite_color2 shadow' />
                                        <h6 className='m-0 ms-3 a_h17'>{state?.rating}/10 ({state?.votes} Votes)</h6>
                                        <HiOutlineChevronRight size={18} />
                                    </div>
                                    <button className="border-0 rounded-2 a_h16 px-3 py-2 fw-bold bg-white">
                                        Rate Now
                                    </button>
                                </div>
                                <div className='a_screen_box d-flex gap-2'>
                                    <div className='a_screen d-flex gap-1 p-1 px-2 bg-light text-black'>
                                        {state?.screens?.map((ele, index, arrData) => {
                                            return <Link key={ele} to={redirectValidPath(ele)} className="text-black">{eleCommaTitle(ele, index, arrData)}</Link>
                                        })}
                                    </div>
                                    <div className="a_lang d-flex gap-1 p-1 px-2 bg-light text-black ">
                                        {state?.languages?.map((ele, index, arrData) => {
                                            return <Link key={ele} to={redirectValidPath(ele)} className="text-black">{eleCommaTitle(ele, index, arrData)}</Link>
                                        })}
                                    </div>
                                </div>
                                <div className='a_duration_box my-4 a_h17 d-flex align-items-center gap-2 text-white'>
                                    <span>{state?.slugInfo?.duration}<GoDotFill size={10} /> </span>
                                    <div className='d-flex gap-1'>
                                        {state?.slugInfo?.category?.map((ele, index, arrData) => {
                                            return <Link key={ele} to={redirectValidPath(ele)} className='text-white'>{eleCommaTitle(ele, index, arrData)}</Link>
                                        })}
                                    </div>
                                    <span><GoDotFill size={10} />{state?.slugInfo?.certification}<GoDotFill size={10} /></span>
                                    <span>{state?.slugInfo?.releaseData}</span>
                                </div>
                                <button onClick={BookTicketsHandler} className='a_redlite_color text-white rounded-3 btn btn-sm a_h19 p-2 px-5'>Book tickets</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <button className='a_share_btn'>
                            <MdOutlineShare size={30} />
                            <h6>Share</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner