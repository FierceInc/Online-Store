import React, { useState } from 'react'
import Homepage from '../Home/Hero'
import SectionOne from '../Home/SectionOne'
import { useEffect } from 'react'
import SectionTwo from '../Home/SectionTwo'
import FinalSection from "../Home/LastSection"

export default function Home() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
      let time = setTimeout(() => {
          setLoader(false)
      }, 2000)
        return () => {
           clearTimeout(time)
        };
    }, []);
if(loader) {
    return <div className="splash"/> 
} 
else {
    return (
    <>
        <Homepage />
        <SectionOne />
        <SectionTwo />
        <FinalSection />
    </>
   )
}

}
