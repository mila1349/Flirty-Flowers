import React from 'react'
import SectionHeader from '../SectionHeader'
import './style.scss'
import gsap from 'gsap'
import SplitText from '../../utils/SplitText3.min.js'
import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'

function Footer() {
  const ref = useRef()
  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(()=>{
    if(onScreen) setReveal(true)
  },[onScreen])

  useEffect(()=>{
    if(reveal){
      const splitText = new SplitText("#location",{
        type:"lines",
        linesClass: "lineParent"
      })

      gsap.to(splitText.lines, {y:200, opacity:1, duration:1, stagger:0.1, ease:'power2' })
    }
  },[reveal])

  return (
    <section className='footer' data-scroll-section>
      <SectionHeader />

      <h1 id='location' className={cn("location",{"is-reveal": reveal })} ref={ref}>
        Rio de Jenairo
      </h1>
    </section>
  )
}

export default Footer