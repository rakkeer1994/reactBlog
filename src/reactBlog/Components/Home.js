import React from 'react'
import Images from './Images'
import LatestArticles from './LatestArticles'
import Thelastest from './Thelastest'
import LatestStories from './LatestStories'

const Home = () => {
  return (
    <div>
        <Images />
        <Thelastest/>
        <LatestArticles/>
        <LatestStories/>
    </div>
  )
}

export default Home