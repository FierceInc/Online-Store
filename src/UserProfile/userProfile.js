import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PP from "../Images/ProfilePic.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";
import { useDatabase } from "../Contexts/FirestoreContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfiguration";
const UserProfile = () => {
  let navigate = useNavigate();
  const { currentUser } = useAuth();
  const { getData } = useDatabase();
  const [userDetails, setUserDetails] = useState({orders:[]});
  const SignOut = async() => {
    await signOut(auth) 
  }
  useEffect(() => {
    let subed = true;
    if (currentUser) {
      getData(currentUser.uid).then((user) => {
        if (subed) {
          setUserDetails(user);
        }
      });
    }
    return () => {
      subed = false;
    };
  });
  let tester = ["W"]
  return (
    <ProfileContainer>
    
      <Logout title="Logout" onClick={SignOut}>Logout</Logout>
      <FirstSection>
        <PictureAndName>
          <PPHolder>
            <ProfileImg src={PP} alt="Profile Photo" />
          </PPHolder>
          <Name>{userDetails.username}</Name>
        </PictureAndName>
        <ButtonsHolder>
          <UpdateProfile onClick={() => navigate("/update-user")}>
            Update Profile
          </UpdateProfile>
          <DeleteProfile>Delete Account</DeleteProfile>
        </ButtonsHolder>
      </FirstSection>
      <SecondSection>
        <AddressContainer>
          <TagName>Address: </TagName>
          <AddressDetails>
           <p>123 franks jones st</p>
           <p>Doornfontein</p>
           <p>Johannesburg</p>
           <p>2000</p>
          </AddressDetails>
        </AddressContainer>
      </SecondSection>

      <ThirdSection>
        <Title>Orders: </Title>
        {
          tester.length > 0
          ?
          (
            <OrderList>
            <ItemDetails>
              <ItemsFirstRow>
                 <ItemStatus>
                <p>Items: {"3"}</p>
                <p>Status: {"Ordered"}</p>
              </ItemStatus>
              <ItemImages>
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <Remainder>{"+5"}</Remainder>
                </ItemImages>
              </ItemsFirstRow>
             
  
              <Items>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
              </Items>
            </ItemDetails>
            <ItemDetails>
              <ItemsFirstRow>
                 <ItemStatus>
                <p>Items: {"3"}</p>
                <p>Status: {"Ordered"}</p>
              </ItemStatus>
              <ItemImages>
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <Remainder>{"+5"}</Remainder>
                </ItemImages>
              </ItemsFirstRow>
             
  
              <Items>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
              </Items>
            </ItemDetails>
            <ItemDetails>
              <ItemsFirstRow>
                 <ItemStatus>
                <p>Items: {"3"}</p>
                <p>Status: {"Ordered"}</p>
              </ItemStatus>
              <ItemImages>
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                <Remainder>{"+5"}</Remainder>
                </ItemImages>
              </ItemsFirstRow>
             
  
              <Items>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
                <ItemLI>
                  <ItemImg src="https://i.ibb.co/SJSxLF6/Nike-Air-Force-1-Sage-Low-Blue.png" alt="shoe" />
                  <p>Nike Air</p>
                  <p>R 1600,98</p>
                  <p>Qty: 2</p>
                </ItemLI>
              </Items>
            </ItemDetails>
          </OrderList>
          )
          :
          <EmptyOrderList>There's nothing here yet</EmptyOrderList>
        }
       
      </ThirdSection>
    </ProfileContainer>
  );
};
export default UserProfile;
const ProfileContainer = styled.div`
    width: min(1024px, 100vw);
    top: min(150px, 100px);
    color: white;
    position: relative;
    margin: auto;
    padding-bottom: 30px;
  `,
  FirstSection = styled.div`
    width: min(550px, 100%);

  `,
  ProfileImg = styled.img`
    width: 100%;
    height: 100%;
  `,
  Logout = styled.p`
  color: white;
  font-family: poppins1;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: min(18px, 4vw);
  cursor: pointer;
  :hover{
    color: #04a3ff;
  }
  `,
  PPHolder = styled.div`
    width: 100px;
    height: 100px;
    margin-left: 10px;
  `,
  PictureAndName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    @media (min-width: 400px) {
      justify-content: left;
      padding: 10px;
      flex-direction: row;
    };
    @media (min-width: 500px) {
    padding: 0;
    }
  `,
  Name = styled.p`
    font-family: poppins2;
    margin-top: 10px;
  `,
  ButtonsHolder = styled.div`
    width: min(400px,100%);
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media (min-width: 500px) {
    margin-right: 10px;
    }
  `,
  UpdateProfile = styled.button`
    width: fit-content;
    text-align: center;
    height: 40px;
    border: none;
    padding: 7px;
    background: white;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    font-family: poppins;
    font-size: min(13px, 4vw);
    margin-right: 20px;
    color: black;
    :hover {
      background: #04a3ff;
    }
  `,
  DeleteProfile = styled.p`
    font-family: poppins2;
    color: white;
    font-size: min(13px, 4vw);
    cursor: pointer;
    :hover {
      color: rgb(255, 10, 0);
    }
  `;
// ---------------------------------------

const SecondSection = styled.div`
width: min(400px, 100%);
font-family: poppins2;
margin-top: 20px;

`,
AddressContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-evenly;
`,
TagName = styled.p`
margin-right: 10px;
font-size: min(15px, 4vw);
`,
AddressDetails = styled.div`
font-size: min(15px, 4vw);
`;
// ----------------------------------------------------------------

const ThirdSection = styled.div`
width: min(380px, 90%);
font-family: poppins;
margin: auto;
@media (min-width: 768px) {
  position: absolute;
  right: 10px;
  top: 40px;
}
`,
Title = styled.p`
color: white;
`,
OrderList = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: auto;
height: fit-content;
justify-content: space-between;
margin-bottom: 60px;
`,

ItemDetails = styled.div`
background: white;
color: black;
display: flex;
flex-direction: column;
height: fit-content;
width: 100%;
border-radius: 5px;
padding: 5px;
margin-bottom: 10px;
cursor: pointer;
`,
ItemsFirstRow = styled.div`
color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 60px;
width: 100%;
padding: 5px;
margin-bottom: 10px;
`,
ItemStatus = styled.div`
color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 60px;
align-items: flex-start;
font-size: min(15px, 4vw);
padding: 5px;
`,
Items = styled.ul`
display: flex;
flex-direction: column; 
min-height: 80px;
display: none;
`,
ItemLI = styled.li`
 display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-evenly;
 height: 70px;
 align-items: center;
 font-size: min(15px, 4vw);
`,
ItemImg = styled.img`
width: min(40px, 50%);
height: min(25px, 30%);
margin-right: 10px;
`,
ItemImages = styled.li`
list-style: none;
display:flex;
flex-direction: row;
justify-content: space-evenly;
position: relative;
align-items: center;
height: 60px;
`,
Remainder = styled.span`
position: absolute;
right: 0;
top: 0px;
font-family: poppins1;
font-size: min(10px, 3vw);
`,
EmptyOrderList = styled.p`
color: white;
text-transform: uppercase;
font-size: min(20px, 4vw);
margin: auto;
font-family: poppins2;
`