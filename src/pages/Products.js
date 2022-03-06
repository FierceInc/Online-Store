import React, { useState, useEffect } from 'react'
import ProductsHero from '../Products/ProductsHero'
import ProductsSecondSection from '../Products/ProductsSecondSection'

export default function Products() {
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
        return <div className="splash" />
      }
      else {
        return (
        <>
        <ProductsHero />
        <ProductsSecondSection />
        </>
    )  
      }
    
}

