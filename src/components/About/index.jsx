import React from 'react'
import './style.scss'
import SectionHeader from '../SectionHeader'
import gsap from 'gsap'
import SplitText from '../../utils/SplitText3.min.js'
import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'

function About() {
  const ref = useRef()
  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(()=>{
    if(onScreen) setReveal(true)
  },[onScreen])

  useEffect(()=>{
    if(reveal){
      const splitText = new SplitText("#headline",{
        type:"lines",
      })

      gsap.to(splitText.lines, {y:-20, opacity:1, duration:1, stagger:0.1, ease:'power2' })
    }
  },[reveal])

  return (
    <section 
      className={cn("about-section")}
      data-scroll-section
    >
       <SectionHeader title="about" />
      <p id='headline' className={cn({ "is-reveal": reveal })} ref={ref}>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  )
}

export default About