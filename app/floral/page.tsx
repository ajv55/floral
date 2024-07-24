import React from 'react'
import FloralHero from '../components/floralComponents/floralHeader'
import FloralList from '../components/floralComponents/floralList'
import Navigation from '../components/mainPage/nav'
import Footer from '../components/mainPage/footer'

export default function Page() {
  return (
    <div className='w-full flex flex-col'>
      <Navigation />
      <FloralHero />
      <FloralList />
      <Footer />
    </div>
  )
}
