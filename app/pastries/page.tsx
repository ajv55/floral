import React from 'react'
import Navigation from '../components/mainPage/nav'
import PastriesHeroSection from '../components/pastriesComponent/pastriesHero'
import PastriesList from '../components/pastriesComponent/pastriesList'
import Footer from '../components/mainPage/footer'

export default function Page() {
  return (
    <div className='w-full flex-col flex'>
      <Navigation />
      <PastriesHeroSection />
      <PastriesList />
      <Footer />
    </div>
  )
}
