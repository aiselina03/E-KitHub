import React from 'react'
import Scroll from '../../components/Scroll'
import Services from '../../components/Services'
import CounterApp from '../../components/Counter'
import LearnSection from '../../components/LearnSection'
import { Link } from 'react-router-dom'
import "./style.scss"
function About() {
  return (
    <>
          <div className="aboutUs">
        <h2>ABOUT US</h2>
      </div>
      <div className="gray">
        <Link to={"/"}>
          HomePage <span>- About</span>
        </Link>
      </div>

    <Scroll/>
    <LearnSection/>
    <Services/>
    <CounterApp/>

    </>
  )
}

export default About