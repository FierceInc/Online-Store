import styled from 'styled-components';
import LargeImg from '../Images/GirlWithRing.png';
import Small1 from '../Images/AdidasShoes.png';
import Small2 from '../Images/B-adidas.png';
import { HashLink } from 'react-router-hash-link';

const SectionOne = () => { 
    return (
        <ArticleSection>
            <SectionText>
            <h4>THIS WEEK.</h4>
            <SmallText>Smaller text explaining what this section is about.{"\n"} To be added.</SmallText>
            </SectionText>
        <SectionGrid id="articles"> 
        
        <ArticleLink to="/articles/article_1">
              <LargerImage src={LargeImg}  alt="LargeImage"/>
              <ArticleName>Does the word unisex mean something to you <i className="fa fa-external-link-square" aria-hidden="true"></i>?</ArticleName>
        </ArticleLink>
      
       
        <ArticleLink to="/articles/article_2">
            <SmallerImage src={Small1} alt="Small Image"/> 
            <ArticleName>The future is brighter than ever <i className="fa fa-external-link-square" aria-hidden="true"></i>.</ArticleName>
        </ArticleLink>
        <ArticleLink to="/articles/article_3">
             <SmallerImage src={Small2} alt= "Small Image2"/>
             <ArticleName>Take an elagant step into the new era <i className="fa fa-external-link-square" aria-hidden="true"></i>.</ArticleName>
        </ArticleLink>
        </SectionGrid>
            
        </ArticleSection>
    );
}

const ArticleSection  = styled.div`
@media  (max-width : 320px){
    width: 100vw;
    position: relative;
    top: 0px;
    overflow-x: hidden;

    };
@media  (min-width : 320px) and (max-width : 480px) {
    width: 100vw;
    position: relative;
    top: -130px;
    overflow-x: hidden;
    };
    @media  (min-width : 375px) and (max-width : 480px) {
        width: 100vw;
        position: relative;
        top: -30px;
        overflow-x: hidden;
    };
@media  (min-width : 480px) and (max-width : 768px) {
    width: 100vw;
    position: relative;
    top: -20px;
    overflow-x: hidden;
    
    };
    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 100vw;
        position: relative;
        top: 0px;
        overflow-x: hidden;
        margin: auto;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 100vw;
            margin: auto;
            position: relative;
            top: 60px;
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
 SectionGrid = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
 align-items: baseline;
 padding: 0 10px;
 margin-top: 20px;
        @media (min-width : 1224px) and (max-width : 1365px) {
            padding: 0 50px;
            };
            @media (min-width : 1365px) {
                padding: 0 80px;
                };
`,
ArticleLink = styled(HashLink)`
@media  (max-width : 320px){

    };
@media  (min-width : 320px) and (max-width : 480px) {

    };
@media  (min-width : 480px) and (max-width : 768px) {

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
ArticleName = styled.p`
display:none;
@media  (max-width : 320px){
display:none;
};
@media  (min-width : 320px) and (max-width : 480px) {

};
@media  (min-width : 480px) and (max-width : 768px) {

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
LargerImage = styled.img`
width: 30vw;
height: 30vw;
@media  (max-width : 320px){
    width: 30vw;
    height: 30vw;
    };

    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 40vw;
        height: auto;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 40vw;
            height: auto;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            width: 35vw;
            height: auto;
            };
            @media (min-width : 1365px) {
                width: 450px;
                height: auto;
                };
`,
SmallerImage = styled.img`
width: 30vw;
height: 30vw;
@media  (max-width : 320px){
    width: 30vw;
    height: 30vw;
    };

    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 28vw;
        height: auto;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 28vw;
            height: auto;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            width: 26vw;
            height: auto;
            };
            @media (min-width : 1365px) {
                width: 350px;
                height: auto;
                };
`,

SectionText = styled.div`
color: white;
font-family: elephant;
font-size: 20px;
text-align: center;

    @media  (min-width : 768px) and (max-width : 1024px) {
        position: absolute;
        top: 50px;
        right: 150px;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            font-size: 30px;
            position: absolute;
            top: 50px;
            right: 150px;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            font-size: 30px;
            position: absolute;
            top: 50px;
            right: 250px;
            };
            @media (min-width : 1365px) {
                font-size: 30px;
                position: absolute;
                top: 100px;
                right: 250px;
                };
`,
SmallText = styled.div`
font-size: 12px;
font-family: poppins;
width: 260px;
margin:auto;
margin-top: 15px;
`

export default SectionOne;
