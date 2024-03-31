import React from 'react'
import "./Footer.css"
import { Description } from './Description'
import { ContactToday } from './ContactToday'
import { Services } from './Services'
import { MenuLinks } from './MenuLinks'
import { SocialLinks } from './SocialLinks'
import Navigations from './Navigations'

export const Footer = () => {
  return (
    <footer>
        <Navigations/>
        <Description/>
        <ContactToday/>
        <Services/>
        <MenuLinks/>
        <SocialLinks/>
    </footer>
  )
}
