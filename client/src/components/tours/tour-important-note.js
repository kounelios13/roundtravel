import React from "react"
import '../../styles/tours/tour-important-notes.scss'

const TourImportantNote = () => {
  return (
    <div className='col-12 border-top-primary mt-4 shadow p-4'>
      <h2 className='display-7-2 text-normal'>Σημαντικες σημειωσεις</h2>
      <ol className='list-numbers'>
        <li>Οι ωρες ενδεχεται να αλλαξουν</li>
        <li>Δωρεαν παραλαβη για τους κρητικους.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ol>
    </div>
  )
}

export default TourImportantNote