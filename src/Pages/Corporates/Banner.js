import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

function AppInput({ label, placeholder, type = "text" }) {
    return (
        <div className='mb-3'>
            <label htmlFor="name" className='a_h12'><span className='text-danger'>*</span>{label}</label> <br />
            <input type={type} style={{ padding: "6px 10px" }} className='border rounded-1 w-100' placeholder={placeholder} />
        </div>
    )
}
const Banner = () => {
    return (
        <div style={{ background: "url(Image/Corporates/corp-banner-bg.jpg)" }} className='position-relative'>
            <div className='h-100 w-100 position-absolute top-0 left-0' style={{ background: "rgba(0,0,0,0.7)", zIndex: 1 }}></div>
            <div className='container position-relative' style={{ zIndex: 2 }}>
                <div className="row text-white">
                    <div className="col-12 col-md-7 text-center mt-5">
                        <h1>Entertainment you can gift.</h1>
                        <p className='my-3 a_h19'>A variety of solutions to skyrocket your business with vouchers,<br /> promotions, loyalty, employee recognition & rewards.</p>
                        <div style={{ width: "55%" }} className='mx-auto d-flex mt-4 align-items-center justify-content-between'>
                            <div className='d-flex justify-content-between gap-5'>
                                <div className='d-flex align-items-center gap-2'>
                                    <FaRegCirclePlay size={22} />
                                    <h5>Watch Video</h5>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <FaDownload size={22} />
                                    <h5>Download Brochure</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <form action="" className='bg-white text-dark mx-auto p-4 rounded-1 w-75 m-5'>
                            <AppInput label={"Full Name"} placeholder={"Name"} />
                            <AppInput label={'Company Email'} placeholder={"Company Email"} type="email" />
                            <AppInput label={'Company Name'} placeholder={"Company Name"} />
                            <AppInput label={'Mobile Number'} type="number" placeholder={"eg. 91480XXXXX"} />
                            <button className='btn btn-secondary w-100 py-3 mt-2'>Received a Callback</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner