import styled from 'styled-components'
import PHI from '../Images/ProductsHero.png'
import React from 'react'

export default function ProductsHero() {
    return (
        <ProductHero id="top">
        <PHImage src={PHI} alt="Girl reasting feet on dashboard"/>
        <Text>
        <FirstHeading>DON'T BLEND IN</FirstHeading>
        <SecondHeading>STANDOUT!</SecondHeading>
        </Text>
    
        <SquareL>
            <SquareS >
            </SquareS>
        </SquareL>
    </ProductHero>
    )
}
const   ProductHero = styled.div`
width: 100vw;
position: relative;
margin: auto;
height:100vw;

@media (min-width: 320px) {
    height:100vw;
}
@media (min-width: 400px) and (max-width: 500px) {
    height:100vw;
}
@media (min-width: 500px) {
    height: 500px;
}
@media (min-width: 768px) {
    top: 30px;
}
@media (min-width: 1120px)  {
    height: 600px;
};
@media (min-width: 1365px) {
    width: 1365px;
 }
`,
PHImage = styled.img` 
position: relative;
 width: 100%;
top: 70px;
filter: contrast(150%) saturate(200%) brightness(40%);
@media (min-width: 500px) and (max-width: 768px) {
width: 400px;
left: 10px;
};
@media (min-width: 768px) {
width: 500px;
left: 20px;
}
@media (min-width: 1024px) and (max-width: 1120px) {
width: 500px;
left: 20px;
top: 80px;
filter: contrast(100%) saturate(160%) brightness(70%);
};
@media (min-width: 1120px) {
width: 600px;
left: 20px;
top: 80px;
filter: contrast(100%) saturate(160%) brightness(80%);
};
@media (min-width: 1365px) {
width: 600px;
left: 80px;
top: 100px;
filter: contrast(100%) saturate(160%) brightness(90%);
};

`,

Text = styled.div`
margin: auto;
width: 90%;
top: 150px;
position: absolute;
display: flex;
flex-direction: column;
@media (max-width: 320px) {
 top: 100px;

};
@media (min-width: 500px)  {
  left:30px;
};
@media (min-width: 768px) { 
    top: 70px;
};
@media (min-width: 1365px) {
    top: 130px;
}
`,
FirstHeading = styled.p`
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: white;
font-family: poppins1;
margin: auto;
font-size: 10vw; 
@media (min-width: 500px) {
    font-size: 40px; 
    margin-right: 100px;
};
@media (min-width: 768px) { 
    font-size: 50px; 
};
@media (min-width: 1365px) {
       font-size: 60px; 
}

`,
SecondHeading = styled.h1`
font-family: playball;
color: white;
margin: auto;
font-size: 15vw; 
@media (min-width: 500px) {
    font-size: 50px; 
    margin-right: 20px;
}
@media (min-width: 768px) { 
    font-size: 60px; 
};
@media (min-width: 1365px) {
    font-size: 70px; 
}
`,
SquareL = styled.div`
@media (min-width: 600px)  {
    width:400px;
    height: 100px;
    border: 1px solid white;
    position: absolute;
    bottom: 80px;
    right: 70px;
    border-bottom: none;
    z-index: -1;
}
@media (min-width: 768px) {
    width:600px;
    height: 200px;
    border: 1px solid white;
    position: absolute;
    bottom: 0px;
    right: 70px;
    border-bottom: none;
    z-index: -1;
}
@media (min-width: 1120px) {
    width: 700px;
    height: 300px;
};
@media (min-width: 1365px) {
    height: 280px;
}
`,
SquareS = styled.div`
@media (min-width: 600px)  {
    width: 380px;
    height:90px;
    margin: 10px;
    margin-bottom: 0;
    border: 1px solid white;
    border-bottom: none;
};
@media (min-width: 768px) {
    width: 580px;
    height:190px;
    margin: 10px;
    margin-bottom: 0;
    border: 1px solid white;
    border-bottom: none;
}
@media (min-width: 1120px) {
    width: 680px;
    height:290px;
};
@media (min-width: 1365px) {
    width: 680px;
    height:270px;
};

`