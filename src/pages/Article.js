import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import LargeImg from "../Images/GirlWithRing.png";
import Small1 from "../Images/AdidasShoes.png";
import Small2 from "../Images/B-adidas.png";
import { useEffect, useState} from "react";


const Articles = () => {
  const [loader, setLoader] = useState(true);
    useEffect(() => {
      let time = setTimeout(() => {
          setLoader(false)
      }, 2000)
        return () => {
           clearTimeout(time)
        };
    }, []);

  let params = useParams();
  let Image;
  let Title;
  let Name;
  switch (params.articleId) {
    case "article_1":
      Image = LargeImg;
      Title = "SHOES ARE UNIVERSAL.";
      Name = "Does the word unisex mean anything to you."
      break;
    case "article_2":
      Image = Small1;
      Title= "THE NEW WAVE."
      Name = "The future is brighter than ever."
      break;
    case "article_3":
      Image = Small2;
      Title = "MAKE A FOOTPRINT.";
      Name = "Take an elegant step into the new era of sneakers."
      break;
    default:
      Image = Small1;
      break;
  }
  if(loader) {
    return <div className="splash" />
  } else {
    return (
      <Article id="top">
        <LeftSection>
          <ArticleTitle>{Title}</ArticleTitle>
          <ArticleImage src={Image} alt="Article Image" />
          <ArticleName>{Name}</ArticleName>
        </LeftSection>
        <RightSection>
      
          <ArticleBody>
            Adidas did something, and you will read about it here what is it? Well
            I don't have any infomation yet I'm just writting whatever comes to
            mind to fill this page. <br /> <br />
            Adidas did something, and you will read about it here what is it? Well
            I don't have any infomation yet I'm just writting whatever comes to
            mind to fill this page. Adidas did something, and you will read about
            it here what is it? Well I don't have any infomation yet I'm just
            writting whatever comes to mind to fill this page. Adidas did
            something, and you will read about it here what is it? Well I don't
            have any infomation yet I'm just writting whatever comes to mind to
            fill this page. Adidas did something, and you will read about it here
            what is it? Well I don't have any infomation yet I'm just writting
            whatever comes to mind to fill this page.
            <br /> <br />
            Adidas did something, and you will read about it here what is it? Well
            I don't have any infomation yet I'm just writting whatever comes to
            mind to fill this page.
          </ArticleBody>
          <BackButton smooth to="/#articles">Return to Articles</BackButton>
        </RightSection>
       
      </Article>
    );
  }
  
};

export default Articles;

const Article = styled.div`
color: white;
width: 100vw;

position: relative;
margin-top: 100px;
  @media(min-width: 1024px) {
 display: flex;
 flex-direction: row;
  }
  @media(min-width: 1365px) {
width: 1365px;
margin: auto;
  }
  `,
  ArticleTitle = styled.h1`
    font-family: poppins1;
    font-size: 7vw;
    text-align: center;
    margin-bottom: 20px;
    @media (min-width: 500px) {
       font-size: 30px;
    }
    @media(min-width: 1024px) {
      font-size: 30px;
       }
  `,
  ArticleName = styled.p`
    font-family: poppins1;
    font-size: 5vw;
    margin-bottom: 20px;
    margin-left: 5px;
    @media (min-width: 768px) {
      font-size: 30px;
   }
   @media(min-width: 1024px) {
    font-size: 20px;
    font-family: poppins2;
    margin-left: 20px;
     };
     @media(min-width: 1365px) {
      margin-left: 100px;
       }
  `,
  ArticleImage = styled.img`
  width: 100%;
  margin: auto;
  @media (min-width: 500px) {
    width: 60%;
    margin: auto;
  }
  @media(min-width: 1024px) {
    width: 400px;
     }

  `,
  LeftSection = styled.div`
  width:100vw;
  padding: 0 5px;
  @media(min-width: 1024px) {
    width: 50vw;
    display: flex;
    flex-direction: column;
    height: 700px;
     }
     @media(min-width: 1224px) {
      margin-left: 100px;
       }
     @media(min-width: 1365px) {
      margin-top: 100px;
       }
  `,
  RightSection = styled.div`
  height: 700px;
  @media(min-width: 1024px) {
    width: 50vw;
    margin-top: 100px;
    margin-right: 20px;
     }
  @media(min-width: 1365px) {
    margin-right: 100px;
    margin-top: 220px;
     }
  
  `,
  ArticleBody = styled.p`
    font-family: poppins2;
    font-size: 4.4vw;
    margin-left: 5px;
    margin-bottom: 20px;
    @media (min-width: 375px) {
      font-size: 3vw;
    }
    @media (min-width: 768px) {
      font-size: 20px;
   }
   @media(min-width: 1024px) {
    font-size: 18px;
     }
  `,
  BackButton = styled(HashLink)`
padding: 5px;
font-family: poppins;
width: 100px;
text-align: center;
border: none;
background: white;
color: black;
border-radius: 6px;
cursor: pointer;
:hover{
  background: #04a3ff;
  color: white;
};
text-decoration: none;
margin: 100px 20px;
  `
