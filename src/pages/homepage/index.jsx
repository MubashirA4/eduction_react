import React from 'react'
import Banner from './featurs/banner'
import Tracks from './featurs/tracks'
import Learning from './featurs/learning'
import Reviews from './featurs/reviews'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Tracks/>
      <Learning/>
      <Reviews/>
    </div>
  )
}

export default Homepage