import React from 'react'
import Nav from '../components/mainPage/nav'
import CupcakeHero from '../components/cupcakeComponent/cupcakeHero'
import CupcakeList from '../components/cupcakeComponent/cupcakeList'
import EnticingSection from '../components/cupcakeComponent/enticing'
import Footer from '../components/mainPage/footer'

export default function Page() {
  return (
    <div className='w-full relative'>
        <Nav/>
        <CupcakeHero />
        <CupcakeList />
        <EnticingSection />
        <Footer />
    </div>
  )
}
