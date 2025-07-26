import React from 'react'
import Hero from '../components/home/Hero'
import ExploreTopics from '../components/home/ExploreTopics'
import NewsLetter from '../components/home/NewsLetter'

const Home = () => {
  return (
    <>
    <div className="bg-[#222] text-white">

      <Hero/>
      <ExploreTopics/>
      <NewsLetter/>
    </div>
    </>
  )
}

export default Home
