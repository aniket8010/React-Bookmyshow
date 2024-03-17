import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const iconsData = [<FaFacebookF />, <BsTwitterX />, <TiSocialInstagram />, <FaYoutube />, <FaPinterestP />, <FaLinkedinIn />]
export const SocialLinks = () => {
  return (
    <section className='a_bg_dark_medium '>
      <div className='a_logo_border position-relative'>
        <div className='a_whitelogo w-100 position-absolute d-flex justify-content-center mb-2'>
          <div className='a_bg_dark_medium px-4'>
            <img src="logo.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container text-white d-flex mt-5 mb-3 justify-content-center gap-2">
        <div className="a_top_section d-flex mt-1 mb-3 justify-content-center gap-2">
          {iconsData.map((value, index) => {
            return <div key={index} className="a_icons">
              {value}
            </div>
          })}
        </div>
      </div>
      <div className="a_copyright text-center a_h11">
        <p>Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </section>
  )
}
