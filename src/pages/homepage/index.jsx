import React from 'react'
import Banner from './featurs/banner'
import Tracks from './featurs/tracks'
import Learning from './featurs/learning'
import Reviews from './featurs/reviews'
import OurTracks from './featurs/our-tracks'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Tracks/>
      <Learning/>
      <Reviews/>
      <OurTracks/>
    </div>
  )
}

export default Homepage