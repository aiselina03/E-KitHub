import React from 'react'
import ContactSection from '../../components/ContactSection'
import Scroll from '../../components/Scroll'
import "./style.scss"
import { Link } from 'react-router-dom'
import ContactMap from '../../components/ContactMap'

function Contact() {
  return (
    <>
    <div className="contactUs">
        <h2>CONTACT US</h2>
      </div>
      <div className="gray">
        <Link to={"/"}>
          HomePage <span>- Contact</span>
        </Link>
      </div>
    <ContactSection/>
    <ContactMap/>
    <Scroll/>
    </>
  )
}

export default Contact