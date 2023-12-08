import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import Developer from './Developer'
import Gallery from './Gallery'
import Team from './Team'
import HowToReach from './HowToReach'

export const Body = () => {
  return (
   <>
   <Header/>
   <MainBody/>
   <HowToReach/>
   {/* <Team/> */}
   <Gallery/>
   <Developer/>
   <Footer/>
   </>
  )
}
