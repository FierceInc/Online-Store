import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import PP from "../Images/ProfilePic.png";
import { useAuth } from "../Contexts/Auth";
import { useDatabase } from "../Contexts/FirestoreContext";
const UpdateProfile = () => {
  let navigate = useNavigate();
  const { currentUser } = useAuth();
  const { getData } = useDatabase();
  const [userDetails, setUserDetails] = useState({orders:[]});

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
    return (
        <Profile>
             <FirstSection>
        <PictureAndName>
          <PPHolder>
            <ProfileImg src={PP} alt="Profile Photo" />
          </PPHolder>
          <Name>{userDetails.username}</Name>
        </PictureAndName>
        <UserForm>
            <User placeholder= "Username" />
            <Address>Address</Address>
            <UserInputs placeholder= "Street Address" />
            <UserInputs placeholder= "Suburb" />
            <UserInputs placeholder= "City" />
            <UserInputs placeholder= "Postal Code" />
            <Buttons>
                <Button onClick={() => {navigate("/user")}}>Cancel</Button>
                <Button>Send</Button>
            </Buttons>
        </UserForm>
      </FirstSection>
        </Profile>
    );
}

export default UpdateProfile;
const Profile = styled.div`
width: min(1024px, 100vw);
top: 100px;
color: white;
position: relative;
margin: auto;
`,
FirstSection = styled.div`
    width: min(550px, 100%);
    margin: auto;
  `,
  ProfileImg = styled.img`
    width: 100%;
    height: 100%;
  `,
  PPHolder = styled.div`
    width: 100px;
    height: 100px;
  `,
  PictureAndName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

  `,
  Name = styled.p`
    font-family: poppins2;
    margin-top: 10px;
  `,
  UserForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: min(400px, 100%);
  margin: auto;
  font-family: poppins2;
  margin-bottom: 50px;
  `,
  Address = styled.p`
  font-family: poppins2;
  font-size: min(15px, 4vw);
  margin: 20px 0 10px 0;
  `,
 
  User = styled.input`
  padding: 15px;
  background: transparent;
  border-radius: 5px;
 border:1px solid #ccc;
 margin-bottom: 10px;
  `,
 UserInputs = styled.input`
 padding: 15px;
 background: transparent;
 border-radius: 5px;
border:1px solid #ccc;
margin-bottom: 10px;
 `,
 Buttons = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: flex-end;
 margin-right: 10px;

 `,
 Button = styled.button`
 padding: 10px;
 width: 100px;
 font-family: poppins1;
border: none;
border-radius: 5px;
margin-right: 10px;
cursor: pointer;
:nth-child(1){
    background: white;
    :hover {
        color: red;
    }
};
:nth-child(2){
    background: #04a3ff;
    :hover {
        color: white;
    }
}
 `