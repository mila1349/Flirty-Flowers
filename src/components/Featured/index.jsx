import React from 'react'
import photos from '../../data'
import './style.scss'

function Featured() {
  const [first, second] = photos

  return (
    <section className='featured-section' data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={first} alt="" data-scroll/>
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={second} alt="" data-scroll/>
      </div>
    </section>
  )
}

export default Featured