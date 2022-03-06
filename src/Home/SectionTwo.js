import React from "react";
import styled from "styled-components";
import Women from "../Images/Ladies.png";
import Men from "../Images/Mans.png";
import { HashLink } from "react-router-hash-link";
import { device } from "../ScreenSizes";
export default function SectionTwo() {
  return (
    <SecondSection>
      <Title>COLLECTIONS</Title>
      <WomensContainer>
        <WomenSection>
          <WomensText>WOMEN'S</WomensText>
          <WomensText2>COLLECTION</WomensText2>
          <WomenButton smooth to="/products#top">
            SHOP
          </WomenButton>
        </WomenSection>
        <WomenImg src={Women} alt="Women Collection" />
      </WomensContainer>

      <MensContainer>
        <MenSection>
          <MensText>MEN'S</MensText>
          <MensText2>COLLECTION</MensText2>
          <MenButton smooth to="/products#top">
            SHOP
          </MenButton>
        </MenSection>
        <MenImg src={Men} alt="Men Collection" />
      </MensContainer>
  
   

      <YearTextMen>2022</YearTextMen>
      <YearTextWomen>2022</YearTextWomen>
    </SecondSection>
  );
}
const SecondSection = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
@media  (max-width : 320px){
    position: relative;
    width: 100%;
    margin: 0;
    top: 0px;
    height: fit-content;
    };
@media  (min-width : 320px) and (max-width : 374px) {
    width: 100vw;
    position: relative;
    top: -130px;
    overflow-x: hidden;

    };
@media  (min-width : 375px) and (max-width : 480px) {
    width: 100vw;
    position: relative;
    top: 10px;
    overflow: hidden;
    };
    @media  (min-width : 480px) and (max-width : 600px) {
      width: 100vw;
      position: relative;
      top: 0px;
      overflow-x: hidden;
    };
@media  (min-width : 600px) and (max-width : 768px) {
  width: 100vw;
  position: relative;
  top: 0px;
  overflow-x: hidden;
    };
    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 100vw;
        position: relative;
        top: 50px;
        overflow-x: hidden;
        margin: auto;
        height: 700px;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 100vw;
            margin: auto;
            position: relative;
            top: 100px;
            overflow-x: hidden;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            width: 100vw;
            top: 60px;
            position: relative;
            };

            @media (min-width : 1365px) {
                width: 1365px;
                position: relative;
                top: 700px;
                margin: auto;
                };
  `,
  WomenImg = styled.img`
  width: 50vw;
  position: absolute;
  right: 10px;
  @media  (max-width : 320px){
    width: 45vw;
  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {
  width: 300px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
    width: 350px;
    right: -50px;
    z-index: 2;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        width: 350px;
        right: -50px;
        z-index: 2;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        width: 350px;
        right: -50px;
        z-index: 2;
          };

          @media (min-width : 1365px) {
            width: 350px;
            right: -50px;
            z-index: 2;
              };
  `,
  MenImg = styled.img`
  width: 50vw;
  position: absolute;
  left: 10px;
  @media  (max-width : 320px){
    width: 45vw;
  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
  @media  (min-width : 480px) and (max-width : 600px) {
  };
@media  (min-width : 600px) and (max-width : 768px) {
   width: 300px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
    width: 350px;
    left: -50px;
    z-index: 2;
    top: -30px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        width: 350px;
        left: -50px;
        z-index: 2;
        top: -30px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        width: 350px;
        left: -50px;
        z-index: 2;
        top: -30px;
          };

          @media (min-width : 1365px) {
            width: 350px;
            left: -50px;
            z-index: 2;
            top: -30px;
              };
  `,
  WomenSection = styled.div`
  position: absolute;
  left: 30px;
  top: 20px;
  height: 50%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media  (max-width : 320px){

  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {
  left:100px;
  top: 50px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
        left:200px;
        top: 50px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        left:200px;
        top: 50px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        left:200px;
        top: 50px;
          };

          @media (min-width : 1365px) {
            left:200px;
            top: 50px;
              };
  `,
  MenSection = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  width: fit-content;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media  (max-width : 320px){
    top: 0px;
  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {
  right:100px;
  top: 50px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
        right:200px;
        top: 50px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        right:200px;
        top: 50px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        right:200px;
        top: 50px;
          };

          @media (min-width : 1365px) {
            right:260px;
            top: 50px;
              };
  `,
  WomensContainer = styled.div`
  position: relative;
  width: 100vww;
  height: 300px;
  margin-bottom: 20px;

  @media  (max-width : 320px){
    height:200px;
    margin-bottom: -60px;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  height:200px;
  
  };
  @media  (min-width : 481px) and (max-width : 600px) {
    margin-bottom: -30px;
  };
@media  (min-width : 600px) and (max-width : 768px) {
  margin-bottom: 0;
  border: 1px solid gray;
  border-left: none;
  padding: 20px;
  height: 300px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
    margin-bottom: 0;
    border: 1px solid gray;
    border-left: none;
    padding: 20px;
    height: 300px;
    width: 90vw;
    margin-right: 100px;
    height: 300px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
     margin-bottom: 0;
    border: 1px solid gray;
    border-left: none;
    padding: 20px;
    height: 300px;
    width: 87vw;
    margin-right: 150px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        margin-bottom: 0;
        border: 1px solid gray;
        border-left: none;
        padding: 20px;
        height: 300px;
        width: 87vw;
        margin-right: 150px;
          };

          @media (min-width : 1365px) {
            margin-bottom: 0;
            border: 1px solid gray;
            border-left: none;
            padding: 20px;
            height: 300px;
            width: 87%;
            margin-right: 150px;
              };
  `,
  MensContainer = styled.div`
  position: relative;
  width: 100vww;
  height: 300px;
  @media  (max-width : 320px){
    height:200px;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  height:200px;
  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {
  border: 1px solid gray;
  border-right: none;
  padding: 20px;
  height: 300px;
  };
  @media  (min-width : 768px) and (max-width : 1024px) {
    border: 1px solid gray;
    border-right: none;
    padding: 20px;
    height: 300px;
    width: 90vw;
    margin-left: 100px;
    height: 300px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        border: 1px solid gray;
        border-right: none;
        padding: 20px;
        height: 300px;
        width: 87vw;
        margin-left: 150px;
        height: 300px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        border: 1px solid gray;
        border-right: none;
        padding: 20px;
        height: 300px;
        width: 87vw;
        margin-left: 150px;
        height: 300px;
          };

          @media (min-width : 1365px) {
            border: 1px solid gray;
            border-right: none;
            padding: 20px;
            height: 300px;
            width: 87%;
            margin-left: 150px;
            height: 300px;
              };
  `,
  WomensText = styled.p`
  font-family: elephant;
  color: white;
  font-size: 30px;

  @media  (max-width : 320px){
    font-size: 100%;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  font-size: 100%;
  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {

  };
  @media  (min-width : 768px) and (max-width : 1024px) {

      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        font-size: 50px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        font-size: 50px;
          };

          @media (min-width : 1365px) {
            font-size: 50px;
              };
  `,
  MensText = styled.p`
  font-family: elephant;
  color: white;
  font-size: 30px;
  @media  (max-width : 320px){
    font-size: 100%;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  font-size: 100%;
  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {

  };
  @media  (min-width : 768px) and (max-width : 1024px) {
    font-size: 50px;
      };

      @media (min-width : 1024px) and (max-width : 1224px) {
        font-size: 50px;
          };
      @media (min-width : 1224px) and (max-width : 1365px) {
        font-size: 50px;
          };

          @media (min-width : 1365px) {
            font-size: 50px;
              };
  `,
  WomensText2 = styled.p`
  font-family: poppins1;
  color: white;
  font-size: 25px;
  @media  (max-width : 320px){
    font-size: 15px;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  font-size: 15px;
  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {

  };
  @media  (min-width : 768px) and (max-width : 1024px) {

      };

      @media (min-width : 1024px) and (max-width : 1224px) {

          };
      @media (min-width : 1224px) and (max-width : 1365px) {

          };

          @media (min-width : 1365px) {

              };
  `,

  MensText2 = styled.p`
  font-family: poppins1;
  color: white;
  font-size: 25px;
  @media  (max-width : 320px){
    font-size: 15px;
  };
@media  (min-width : 320px) and (max-width : 480px) {
  font-size: 15px;
  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {

  };
  @media  (min-width : 768px) and (max-width : 1024px) {

      };

      @media (min-width : 1024px) and (max-width : 1224px) {

          };
      @media (min-width : 1224px) and (max-width : 1365px) {

          };

          @media (min-width : 1365px) {

              };
  `,
  MenButton = styled(HashLink)`
  text-decoration: none;
  color: black;
  background: white;
  padding: 5px 20px;
  width: 100px;
  text-align: center;
  font-family: poppins1;
  border-radius: 5px;
  @media  (max-width : 320px){
  width: 80px;
  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
   @media  (min-width : 480px) and (max-width : 600px) {

    };
@media  (min-width : 600px) and (max-width : 768px) {

    }
  @media  (min-width : 768px) and (max-width : 1024px) {

      };

      @media (min-width : 1024px) and (max-width : 1224px) {

          };
      @media (min-width : 1224px) and (max-width : 1365px) {

          };

          @media (min-width : 1365px) {

              };
  `,
  WomenButton = styled(HashLink) `
  text-decoration: none;
  color: black;
  background: white;
  padding: 5px 20px;
  width: 100px;
  text-align: center;

  font-family: poppins1;
  border-radius: 5px;
  @media  (max-width : 320px){

  };
@media  (min-width : 320px) and (max-width : 480px) {

  };
  @media  (min-width : 480px) and (max-width : 600px) {

  };
@media  (min-width : 600px) and (max-width : 768px) {

  };
  @media  (min-width : 768px) and (max-width : 1024px) {

      };

      @media (min-width : 1024px) and (max-width : 1224px) {

          };
      @media (min-width : 1224px) and (max-width : 1365px) {

          };

          @media (min-width : 1365px) {

              };
  `,
  
  Title = styled.p`
  font-family: elephant;
  color: white;
  font-size: 25px;
  margin: auto;

  margin-bottom: 20px;
  @media  (max-width : 320px){
    };
@media  (min-width : 320px) and (max-width : 480px) {
    };
      @media  (min-width : 480px) and (max-width : 600px) {

    };
@media  (min-width : 600px) and (max-width : 768px) {
  display: none;
    };
    @media  (min-width : 768px) and (max-width : 1024px) {
      display: none;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
          display: none;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
          display: none;
            };

            @media (min-width : 1365px) {
              display: none;
                };
  `
,
YearTextMen = styled.h1`
    @media ${device.mobileSmall} {
      font-size: 16px;
      display: none;
    }
    @media ${device.laptop} {
      font-size: 74px;
      transform: rotate(90deg);
      font-family: poppins1;
      width: 100px;
      font-weight: 900;
      color: black;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      position: absolute;
      bottom: 150px;
      left: 50px;
      display: block;
      z-index: 3;
    }
  `,
  YearTextWomen = styled.h1`
    @media ${device.mobileSmall} {
      display: none;
    }

    @media ${device.laptop} {
      font-size: 74px;
      transform: rotate(270deg);
      font-family: poppins1;
      width: 100px;
      font-weight: 900;
      color: black;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      position: absolute;
      top: 160px;
      right: 70px;
      z-index: 3;
      display: block;
    }
  `
