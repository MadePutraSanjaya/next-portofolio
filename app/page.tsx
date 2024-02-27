import React from 'react'
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';
import Portofolio from './components/Portofolio/Portofolio';

const Page = () => {
  return (
    <>
     <Banner />
     <About/>
     <Experience /> 
     <Resume />
     <Portofolio />
    </>
  )
}

export default Page
