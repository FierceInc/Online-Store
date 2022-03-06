import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image1 from "../Images/AboutImage.png"
import Image2 from "../Images/AboutImage2.png"

const About = () => {
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
            <AboutPage>
                <Title>OUR STORY</Title>
                <Sections>
                <TopSection>
                    <TopSectionImage src={Image1} alt="Mirrored Vans Image"/>
                    <TopText>Our story itself has it's own story to tell. Get indulged in the multi-verse of great footwear purely mande and ddesigneed for great people like yourself. Share the spirit of ShoeFits. Listed one of the best online sneaker stores of 2020. </TopText>
                </TopSection>
    
                <BottomSection>
                <BottomSectionImage src={Image2} alt="Mirrored Vans Image"/>
                <BottomText>ShoeFits was created and developed by SIZO.dev. with the aim of delivering affordable sneaker right to the fingertips of Dedicated sneaker lovers. Created in 2022. 
                    <br />
                    <br />
                Let's walk and talk about it.</BottomText>
              
                </BottomSection>
                </Sections>
             
            </AboutPage>
        );
      }
   
}

export default About;

const AboutPage = styled.div`
width: 100vw;
color: white;
margin: auto;
height: 800px;
@media (min-width: 1365px){
    width: 1365px;
}
`,
Title = styled.h1`
font-family: poppins1;
margin: 100px auto 20px auto;
width: fit-content;
`,
TopSection = styled.div`
margin: 0px 10px 50px 10px ;
font-family: poppins2;
@media (min-width: 768px) {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 200px;
    margin: 0px 20px 50px 20px ;
 }
`,
BottomSection = styled.div`
margin: 20px 10px 30px 10px ;
font-family: poppins2;
@media (min-width: 768px) {
    margin: 20px 20px 30px 20px ;
    width: 95%;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    height: 200px;
 }
`,
TopSectionImage = styled.img`
width: 300px;
@media (max-width: 320px) {
   width: 100%;
};
@media (min-width: 768px) {
    margin-left: 20px;
  }
`,
BottomSectionImage = styled.img`
width: 300px;
@media (max-width: 320px) {
    width: 100%;
 }
 @media (min-width: 768px) {
    margin-right: 20px;
  }
`,
TopText = styled.p`
@media (max-width: 320px) {
    font-size: 5vw;
}
@media (min-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
`,
BottomText = styled.p`
@media (max-width: 320px) {
    font-size: 5vw;
};
@media (min-width: 768px) {
    font-size: 16px;
  }
`,
Sections = styled.div`

`