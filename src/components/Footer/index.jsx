import React from 'react'
import SectionHeader from '../SectionHeader'
import './style.scss'

function Footer() {
  return (
    <section className='footer' data-scroll-section>
      <SectionHeader />

      <h1 id='location' className='location'>
        Rio de Jenairo
      </h1>
    </section>
  )
}

export default Footer