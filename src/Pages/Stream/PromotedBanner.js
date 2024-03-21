import React from 'react'
import { IoMdPlay } from "react-icons/io";

export const PromotedBanner = ({ path, imgcardpath, isPremiere, title, movieName, slug, language, description }) => {
    return (
        <div className='a_promoted_banner_main' style={{ background: path }}>
            <div className="a_promoted_banner_main_forground">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="a_img_box">
                                <img src={imgcardpath} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 text-start d-flex align-items-center">
                            <div className="a_promoted_banner_main_forground_content text-white d-flex flex-column gap-4">
                                {isPremiere && <div style={{ width: "fit-content" }} className='d-flex rounded-pill pe-2 gap-2 align-items-center a_bg_dark'>
                                    <div className="a_play_icon">
                                        <IoMdPlay />
                                    </div>
                                    <h6 className='a_h14 my-1 a_premiere'>PREMIERE</h6>
                                </div>}
                                <h6>{title}</h6>
                                <h2>{movieName}</h2>
                                <h6>{slug}</h6>
                                <h6 >{language}</h6>
                                <h6 style={{ lineHeight: "25px" }}>{description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
