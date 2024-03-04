import React, {useState, useRef} from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CustomCursor from '../CustomCursor'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import useLocoScroll from '../hooks/useLocoScroll'

import '../styles/home.scss'
import { useEffect } from 'react'

function Home() {
  const [preLoader, setPreLoader] = useState(true)
  const [timer, setTimer] = useState(3)
  const id = useRef(null)

  useLocoScroll(!preLoader)

  const clear = () =>{
    window.clearInterval(id.current)
    setPreLoader(false)
  }

  useEffect(()=>{
    window.setInterval(()=>{
      id.current = setTimer((timer)=>timer-1)
    },1000)
  },[])

  useEffect(()=>{
    if(timer === 0){
      clear()
    }
  },[timer])

  return (
    <>
        <CustomCursor/>

        {
          preLoader ? (
            <div className="loader-wrapper absolute">
              <h1>Flirty Flower</h1>
              <h2>Rio De Jenairo</h2>
            </div>
          ):(
            <div className='main-container' id='main-container' data-scroll-container>
              <Navbar/>
              <Header/>
              <Featured/>
              <About/>
              <Gallery/>
              <Footer/>
          </div>
          )
        }
    </>
  )
}

export default Home