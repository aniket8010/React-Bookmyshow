import React from 'react'
import { eleCommaTitle } from '../../Lib/Helpers'
import "./AboutCard.css"
export const AboutCard = ({ imgPath, name, profession = [] }) => {
    return (
        <div className='mt-5 d-flex justify-content-center text-center align-items-center  flex-column'>
            <div className='a_about_img_box'>
                <img src={imgPath} alt="" />
            </div>
            <h6 className='mt-1 fw-normal'>{name}</h6>
            <div className='m-0'>
                {Array.isArray(profession) && profession?.map((ele,index,arrData)=>{
                    return <span className='a_h22' key={ele}>{eleCommaTitle(ele,index,arrData)}</span>
                })}
            </div>
        </div>
    )
}
