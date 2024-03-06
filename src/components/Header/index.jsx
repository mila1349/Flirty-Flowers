import React from 'react'
import './style.scss'
import gsap from 'gsap'
import SplitText from '../../utils/SplitText3.min.js'
import { useEffect } from 'react'

function Header() {
  useEffect(()=>{
    const splitText = new SplitText("#header-text",{
      type:"lines",
      linesClass: "lineChildren"
    })

    const splitParent = new SplitText("#header-text",{
      type:"lines",
      linesClass: "lineParent"
    })

    gsap.to(splitText.lines, {y:0, opacity:1, duration:1, stagger:0.1, ease:'power2' })
  },[])

  return (
    <div className='header-container' data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>

      <h1 id='header-text'>Art Objects</h1>
    </div>
  )
}

export default Header