import styled from "styled-components";
import HeroOne from "../Images/HeroOne.png";
import HeroTwo from "../Images/HeroTwo.png";
import { HashLink } from "react-router-hash-link";

const Homepage = () => {
  return (
    <Body id="top">
      <LeftSegment>
        <HeadingOne>KICKS</HeadingOne>
        <HeadingTwo>WITH STYLE</HeadingTwo>
        <p
          style={{
            color: "#fff",
            fontFamily: "poppins",
            fontSize: "13px",
            marginBottom: "30px",
          }}
        >
          Some text that explains something.
        </p>
        <ExploreBTN smooth to="/products#products">
          EXPLORE
        </ExploreBTN>
      </LeftSegment>

      <RightSegment>
        <SquareL>
          <SquareS></SquareS>
        </SquareL>
        <Hero1 src={HeroOne} alt="Hero1" />
        <Hero2 src={HeroTwo} alt="Hero1" />

        <HeroIcons>
          <a href="https://twitter.com/SIZO_Dev" target="_blank" rel="noreferrer"><IconImages className="fa fa-twitter"></IconImages></a>
          <a href="https://twitter.com/SIZO_Dev" target="_blank" rel="noreferrer"> <IconImages className="fa fa-instagram "></IconImages> </a>
          <a href="https://twitter.com/SIZO_Dev" target="_blank" rel="noreferrer"> <IconImages className="fa fa-facebook "></IconImages> </a>
        </HeroIcons>
      </RightSegment>
    </Body>
  );
};
const Body = styled.div`
    @media (max-width: 320px) {
      width: 100vw;
      position: relative;
      overflow-x: hidden;
      top: 90px;
    }
   
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 100vw;
      position: relative;
      height: 700px;
      margin: auto;
    }

    @media (min-width: 1024px) and (max-width: 1224px) {
      width: 100vw;
      margin: auto;
      position: relative;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      width: 100vw;
      margin: auto;
      position: relative;
    }
    @media (min-width: 1365px) {
      width: 1365px;
      margin: auto;
      position: relative;
    } ;
  `,
  LeftSegment = styled.div`
    @media (max-width: 320px) {
      position: absolute;
      width: 100%;
      height: 300px;
      top: 10px;
      left: 10px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 80px;
      left: 10px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 480px) and (max-width: 500px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 80px;
      left: 10px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 500px) and (max-width: 768px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 100px;
      left: 30px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 130px;
      left: 40px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 150px;
      left: 100px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 150px;
      left: 100px;
      z-index: 1;
      text-align: center;
    }
    @media (min-width: 1365px) {
      position: absolute;
      width: fit-content;
      height: 300px;
      top: 150px;
      left: 100px;
      z-index: 1;
      text-align: center;
    } ;
  `,
  RightSegment = styled.div`
    @media (max-width: 320px) {
      position: relative;
      width: 100%;
      height: 400px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      position: relative;
      width: 100vw;
      height: 500px;
    }
    @media (min-width: 480px) and (max-width: 500px) {
      position: relative;
      width: 100vw;
      height: 500px;
    }
    @media (min-width: 500px) and (max-width: 768px) {
      position: relative;
      width: 100vw;
      height: 600px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      position: relative;
      width: 100vw;
      height: 600px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      position: relative;
      width: 97vw;
      height: 600px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      position: relative;
      width: 97vw;
      height: 600px;
    }
    @media (min-width: 1365px) {
      position: absolute;
      width: fit-content;
      height: 600px;
      right: 100px;
    } ;
  `,
  Hero1 = styled.img`
    @media (max-width: 320px) {
      width: 100%;
      filter: contrast(100%) saturate(200%) brightness(40%);
    }
    @media (min-width: 320px) and (max-width: 375px) {
      width: 100%;
      position: absolute;
      filter: contrast(100%) saturate(200%) brightness(40%);
    }
    @media (min-width: 375px) and (max-width: 480px) {
      width: 70%;
      position: absolute;
      right: 5px;
      top: 70px;
      filter: contrast(100%) saturate(200%) brightness(40%);
    }
    @media (min-width: 480px) and (max-width: 500px) {
      width: 70%;
      position: absolute;
      right: 5px;
      top: 70px;
      filter: contrast(100%) saturate(200%) brightness(40%);
    }
    @media (min-width: 500px) and (max-width: 768px) {
      filter: contrast(100%) saturate(200%) brightness(50%);
      width: 400px;
      position: absolute;
      right: 5px;
      top: 70px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      filter: contrast(100%) saturate(200%) brightness(50%);
      width: 450px;
      position: absolute;
      right: 10px;
      top: 100px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      filter: contrast(100%) saturate(200%) brightness(100%);
      width: 450px;
      position: absolute;
      right: 10px;
      top: 100px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      filter: contrast(100%) saturate(200%) brightness(100%);
      width: 450px;
      position: absolute;
      right: 10px;
      top: 100px;
    }
    @media (min-width: 1365px) {
      filter: contrast(100%) saturate(200%) brightness(100%);
      width: 450px;
      position: absolute;
      right: 10px;
      top: 100px;
    } ;
  `,
  Hero2 = styled.img`
    @media (max-width: 320px) {
      display: none;
    }
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 375px) and (max-width: 480px) {
      position: absolute;
      left: 5px;
      display: block;
      width: 60%;
      top: 50%;
      filter: contrast(100%) saturate(180%) brightness(40%);
    }
    @media (min-width: 480px) and (max-width: 500px) {
      position: absolute;
      left: 5px;
      display: block;
      width: 60%;
      top: 50%;
      filter: contrast(100%) saturate(180%) brightness(40%);
    }
    @media (min-width: 500px) and (max-width: 768px) {
      filter: contrast(100%) saturate(180%) brightness(50%);
      position: absolute;
      right: 265px;
      display: block;
      width: 350px;
      top: 50%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      filter: contrast(100%) saturate(180%) brightness(50%);
      position: absolute;
      right: 350px;
      display: block;
      width: 350px;
      top: 60%;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      filter: contrast(100%) saturate(180%) brightness(100%);
      position: absolute;
      right: 350px;
      display: block;
      width: 350px;
      top: 60%;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      filter: contrast(100%) saturate(180%) brightness(100%);
      position: absolute;
      right: 350px;
      display: block;
      width: 350px;
      top: 60%;
    }
    @media (min-width: 1365px) {
      filter: contrast(100%) saturate(180%) brightness(100%);
      position: absolute;
      right: 350px;
      display: block;
      width: 350px;
      top: 60%;
    } ;
  `,
  SquareL = styled.div`
    @media (max-width: 320px) {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 400px;
      height: 500px;
      border: 1px solid gray;
      position: absolute;
      top: 180px;
      right: 150px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      width: 400px;
      height: 500px;
      border: 1px solid gray;
      position: absolute;
      top: 180px;
      right: 150px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      width: 400px;
      height: 500px;
      border: 1px solid gray;
      position: absolute;
      top: 180px;
      right: 150px;
    }
    @media (min-width: 1365px) {
      width: 400px;
      height: 500px;
      border: 1px solid gray;
      position: absolute;
      top: 180px;
      right: 150px;
    } ;
  `,
  SquareS = styled.div`
    @media (max-width: 320px) {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 380px;
      height: 480px;
      border: 1px solid gray;
      margin: 10px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      width: 380px;
      height: 480px;
      border: 1px solid gray;
      margin: 10px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      width: 380px;
      height: 480px;
      border: 1px solid gray;
      margin: 10px;
    }
    @media (min-width: 1365px) {
      width: 380px;
      height: 480px;
      border: 1px solid gray;
      margin: 10px;
    } ;
  `,
  HeadingOne = styled.p`
    @media (max-width: 320px) {
      font-size: 46px;
      letter-spacing: 5px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 46px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 53px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 53px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      font-size: 62px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      font-size: 70px;
      font-family: elephant;
      color: white;
    }
    @media (min-width: 1365px) {
      font-size: 70px;
      font-family: elephant;
      color: white;
    } ;
  `,
  HeadingTwo = styled.p`
    @media (max-width: 320px) {
      font-size: 35px;
      font-family: racing;
      color: white;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 35px;
      font-family: racing;
      color: white;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 40px;
      font-family: racing;
      color: white;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 40px;
      font-family: racing;
      color: white;
      margin-bottom: 15px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      font-size: 54px;
      font-family: racing;
      color: white;
      margin-bottom: 15px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      font-size: 54px;
      font-family: racing;
      color: white;
      margin-bottom: 15px;
    }
    @media (min-width: 1365px) {
      font-size: 54px;
      font-family: racing;
      color: white;
      margin-bottom: 15px;
    } ;
  `,
  ExploreBTN = styled(HashLink)`
    text-decoration: none;
    color: black;
    background: white;
    padding: 10px 20px;
    font-family: poppins1;
    border-radius: 5px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 10px 20px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      padding: 15px 25px;
    } ;
  `,
  HeroIcons = styled.div`
    @media (max-width: 320px) {
      display: flex;
      width: 100px;
      flex-direction: row;
      justify-content: space-evenly;
      position: absolute;
      right: 10px;
      bottom: 200px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: flex;
      width: 100px;
      flex-direction: row;
      justify-content: space-evenly;
      position: absolute;
      right: 10px;
      bottom: 200px;
    }
    @media (min-width: 480px) and (max-width: 500px) {
      display: flex;
      width: 100px;
      flex-direction: row;
      justify-content: space-evenly;
      position: absolute;
      right: 40px;
      bottom: 40px;
    }
    @media (min-width: 500px) and (max-width: 768px) {
      display: flex;
      width: 100px;
      flex-direction: row;
      justify-content: space-evenly;
      position: absolute;
      right: 10px;
      bottom: 70px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      display: flex;
      width: fit-content;
      height: 100px;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 60px;
      bottom: -50px;
    }
    @media (min-width: 1024px) and (max-width: 1224px) {
      display: flex;
      width: fit-content;
      height: 100px;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 60px;
      bottom: -50px;
    }
    @media (min-width: 1224px) and (max-width: 1365px) {
      display: flex;
      width: fit-content;
      height: 100px;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 60px;
      bottom: -50px;
    }
    @media (min-width: 1365px) {
      display: flex;
      width: fit-content;
      height: 100px;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 60px;
      bottom: -50px;
    } ;
  `,
  IconImages = styled.i`
    color: white;
    font-size: 15px;
    cursor: pointer;
    :hover{
        color: #04a3ff;
    }
  `;

export default Homepage;
