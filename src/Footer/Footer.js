import React from 'react'
import "./Footer.css"
import { Navigations } from './Navigations'
import { Description } from './Description'
import { ContactToday } from './ContactToday'
import { Services } from './Services'
import { MenuLinks } from './MenuLinks'
import { SocialLinks } from './SocialLinks'

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
