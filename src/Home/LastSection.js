import React from 'react'
import styled from 'styled-components'
import Top from '../Images/AboutMainPic.png'
import Bottom from '../Images/AboutPic.png'

export default function FinalSection() {
    return (
        <LastSection>
        <Vision>
            <Heading>VISION</Heading> 
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fugiat sequi maiores nemo molestias dolor! Ipsa, quisquam. Nulla ab, exercitationem tempora sapiente, dolor fuga modi quasi, libero beatae sequi magni!</Text>
        </Vision>
        <TopPic src={Top} />
        <BottomPic src={Bottom} />
    <Container>
        <MAndH>
            <Heading>MISSION</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fugiat sequi maiores nemo molestias dolor! Ipsa, quisquam. Nulla ab, exercitationem tempora sapiente, dolor fuga modi quasi, libero beatae sequi magni!</Text>
        </MAndH>
        <MAndH>
            <Heading>HISTORY</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fugiat sequi maiores nemo molestias dolor! Ipsa, quisquam. Nulla ab, exercitationem tempora sapiente, dolor fuga modi quasi, libero beatae sequi magni!</Text>
        </MAndH>
    </Container>
      
        </LastSection>
    )
}
const LastSection = styled.div`
height: fit-content;
color: white;
@media  (max-width : 320px){
    position: relative;
    width: 100%;
    margin: 0;
    top: -100px;
    height: fit-content;

    };
@media  (min-width : 320px) and (max-width : 480px) {
    width: 100vw;
    position: relative;
    top: -150px;
    overflow-x: hidden;

    };
    @media  (min-width : 375px) and (max-width : 480px) {
        width: 100vw;
        position: relative;
        top: 20px;
        overflow-x: hidden;
    };
@media  (min-width : 480px) and (max-width : 768px) {
    width: 100vw;
    position: relative;
    top: 20px;
    overflow-x: hidden;
    height: fit-content;
    };
    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 100vw;
        position: relative;
        top: 0px;
        overflow: hidden;
        margin: auto;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 100vw;
            margin: auto;
            position: relative;
            top: 100px;
            overflow-x: hidden;
            height: 600px;
            overflow: hidden;
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            width: 100vw;
            top: 60px;
            position: relative;
            height: 600px;
            overflow: hidden;
            };

            @media (min-width : 1365px) {
                width: 1365px;
                position: relative;
                top: 700px;
                margin: auto;
                height: 600px;
                overflow: hidden;
                };

`,
Vision = styled.div`
width: 100vw;
font-family: poppins;
text-align: center;
margin-bottom: 20px;
@media  (max-width : 319px){
margin-top: -50px;
    };
@media  (min-width : 320px) and (max-width : 480px) {


    };
    @media  (min-width : 375px) and (max-width : 480px) {
 
    };
@media  (min-width : 480px) and (max-width : 500px) {

    
    };
@media  (min-width : 500px) and (max-width : 768px) {
    width: 300px;
    position: relative;
    left: 10px;
    line-height: 40px;
    };
    @media  (min-width : 768px) and (max-width : 1024px) {
        width: 300px;
        position: relative;
        left: 10px;
        line-height: 40px;
        top: 0px;
        };
  
        @media (min-width : 1024px) and (max-width : 1224px) {
            width: 300px;
            position: relative;
            left: 100px;
            line-height: 40px;
            
            };
        @media (min-width : 1224px) and (max-width : 1365px) {
            width:400px;
            position: relative;
            left: 100px;
            line-height: 40px;
            text-align: left;
            };

            @media (min-width : 1365px) {
                width: 400px;
                position: relative;
                left: 100px;
                line-height: 40px;
                text-align: left;
                };

`,
MAndH = styled.div`
text-align: center;
margin-bottom: 35px;
position: relative;

@media  (max-width : 320px){


};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

};
@media  (min-width : 500px) and (max-width : 768px) {
    height: 450px;
    :nth-child(2) {
        width: 300px;
        position: absolute;
        bottom: 20px;
        height: 300px;
        line-height: 40px;
        right: 10px;
    }
    
    };
@media  (min-width : 768px) and (max-width : 1024px) {
    height: 450px;
    :nth-child(2) {
        width: 300px;
        position: absolute;
        bottom: 20px;
        height: 300px;
        line-height: 40px;
        right: 10px;
    }
    };

    @media (min-width : 1024px) and (max-width : 1224px) {
        height: 450px;
        width: 300px;
        line-height: 40px;
        :nth-child(2) {
            position: relative;
            bottom: 0;
        }
        }
        };
    @media (min-width : 1224px) and (max-width : 1365px) {
        height: 450px;
        height: 450px;
        width: 400px;
        line-height: 40px;
        :nth-child(2) {
            position: relative;
            bottom: 0;
        }
        }
        };

        @media (min-width : 1365px) {
            height: 450px;
            height: 450px;
            width: 400px;
            line-height: 40px;
            :nth-child(2) {
                position: relative;
                bottom: 0;
            }
            };
`,
Container = styled.div`
@media  (max-width : 320px){

};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

};
@media  (min-width : 480px) and (max-width : 768px) {


};
@media  (min-width : 768px) and (max-width : 1024px) {

    };

    @media (min-width : 1024px) and (max-width : 1224px) {
            display: flex;
            flex-direction: row;
            position: relative;
            width: 100%;
            height: 320px;
           justify-content: right;
            top: 0px;
        };
    @media (min-width : 1224px) and (max-width : 1365px) {
        display: flex;
            flex-direction: row;
            position: relative;
            width: 100%;
            margin-auto;
            height: 320px;
           justify-content: right;
           bottom: 20px;
        };

        @media (min-width : 1365px) {
            display: flex;
            flex-direction: row;
            position: relative;
            width: 100%;
            height: 320px;
           justify-content: right;
           bottom: 20px;
            };

`,
Heading = styled.p`
font-size: 20px;
font-family: poppins1;
text-align: center;
@media  (max-width : 320px){


};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

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
Text = styled.p`
font-size: 12px;
font-family: poppins2;
margin: 10px;
@media  (max-width : 320px){


};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

};
@media  (min-width : 480px) and (max-width : 768px) {


};
@media  (min-width : 768px) and (max-width : 1024px) {

    };

    @media (min-width : 1024px) and (max-width : 1224px) {
        font-size: 12px;
        };
    @media (min-width : 1224px) and (max-width : 1365px) {
        font-size: 18px;
        };

        @media (min-width : 1365px) {
            font-size: 18px;
            };
`, 
TopPic = styled.img`
display: none;
@media  (max-width : 320px){


};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

};
@media  (min-width : 500px) and (max-width : 768px) {
display: block;
width: 40vw;
position: absolute;
top: 80px;
right: 20px;
};
@media  (min-width : 768px) and (max-width : 1024px) {
    display: block;
    width: 300px;
    position: absolute;
    top: 80px;
    right: 20px;
    };

    @media (min-width : 1024px) and (max-width : 1224px) {
        display: block;
        width: 300px;
        position: absolute;
        top: 40px;
        right: 100px;
        };
    @media (min-width : 1224px) and (max-width : 1365px) {
        display: block;
        width: 400px;
        position: absolute;
        top: 20px;
        right: 100px;
        };

        @media (min-width : 1365px) {
            display: block;
            width: 400px;
            position: absolute;
            top: 20px;
            right: 100px;
            };
`,
BottomPic = styled.img`
display: none;
@media  (max-width : 320px){


};
@media  (min-width : 320px) and (max-width : 480px) {


};
@media  (min-width : 375px) and (max-width : 480px) {

};
@media  (min-width : 500px) and (max-width : 768px) {
    display: block;
    width: 35vw;
    position: absolute;
    bottom:120px;
    left: 20px;
};
@media  (min-width : 768px) and (max-width : 1024px) {
    display: block;
    width: 300px;
    position: absolute;
    bottom:100px;
    left: 20px;
    };

    @media (min-width : 1024px) and (max-width : 1224px) {
        display: block;
        width: 300px;
        position: absolute;
        bottom:50px;
        left: 100px;
        };
    @media (min-width : 1224px) and (max-width : 1365px) {
        display: block;
        width: 300px;
        position: absolute;
        bottom:30px;
        left: 100px;
        };

        @media (min-width : 1365px) {
            display: block;
            width: 300px;
            position: absolute;
            bottom:30px;
            left: 100px;
            };
`