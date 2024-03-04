import React from 'react'
import './style.scss';

export default function SectionHeader({title}) {
  return (
    <h6 className='section-header' data-scroll-section>
      {title}
    </h6>
  )
}