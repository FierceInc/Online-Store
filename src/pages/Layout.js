import React, { useEffect, useState } from 'react';
import '../styles.css'
import Logo from '../Images/Logo.png'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { auth } from '../firebaseConfiguration'
import { signOut } from "firebase/auth";
import { useAuth } from "../Contexts/Auth";
import { useDatabase } from '../Contexts/FirestoreContext';

const Layout = () => {
  const [navDisplay, setNavDisplay] = useState("none");
  let wishListInventory = useSelector(state => state.wishList.value)
  let cartInventory = useSelector(state => state.cart.value)
  const {currentUser} = useAuth()
  const {getData} = useDatabase()
  const [userDetails, setUserDetails] = useState({wishlist: [], cart: []});
  let location = useLocation();
  const signout = async () => {
   await signOut(auth)
  }
  useEffect(() => {
    if(currentUser) {
    getData(currentUser.uid).then(user => {
          setUserDetails(user)
      }
    )
    }
  }, [currentUser, getData, userDetails]);

        return (
          <React.Fragment>
            <Head>
                 <LogoPH>
                 <LogoImage src={Logo} alt="Logo" />
                 <LogoName>ShoeFits</LogoName>
                 </LogoPH> 

                 <Hamburger className={
                   navDisplay === "none" ? "fas fa-bars" : "fas fa-times"
                 } onClick={() => {
                   navDisplay === "none" ? setNavDisplay("flex") : setNavDisplay("none")
                 }

                 }/>
                 <HeaderPH>
                 <Nav navDisplay = {navDisplay}>
                   <Link style={{textDecoration: "none"}} to="/"><NavList onClick={() => setNavDisplay("none")} style={location.pathname === "/" ? {color: "#ea00ff"} : {color: "white"}}>Home</NavList></Link>
                   <Link style={{textDecoration: "none"}} to="/products"><NavList onClick={() => setNavDisplay("none")} style={location.pathname === "/products" ? {color: "#ea00ff"} : {color: "white"}}>Products</NavList></Link>
                   <Link style={{textDecoration: "none"}} to="/about"><NavList onClick={() => setNavDisplay("none")} style={location.pathname === "/about" ? {color: "#ea00ff"} : {color: "white"}}>About</NavList></Link>
                  <NavList>
                     <Icons>
                     {
                    currentUser ?  <NavIcon title={currentUser?.email} className="fas fa-user-minus" onClick={() => {
                          signout()
                          setNavDisplay("none")
                        }}></NavIcon> :
                         <Link to="/login"><NavIcon title="Log In" className="fas fa-user-plus" onClick={() => setNavDisplay("none")}></NavIcon></Link>
                      }
                        <Link to="/wishlist"><NavIcon className="fas fa-heart" onClick={() => setNavDisplay("none")}></NavIcon></Link>

                        <Link to="/cart" onClick={() => setNavDisplay("none")}><NavIcon className="fas fa-cart-arrow-down"></NavIcon></Link>
                   
                     </Icons>
                     </NavList>
                  
                 </Nav>
                 
                 </HeaderPH>

                 <IconsPH>
                   <div style={{width: "50px", position: 'relative' , marginTop: "5px"}}>
                     <Link to="/wishlist"><IconImage className="fas fa-heart" style={location.pathname === "/wishlist" ? {color: "#04a3ff"} : {color: "white"}} ></IconImage></Link> 
                     <InventoryCount>{currentUser ? userDetails.wishlist.length : wishListInventory.length}</InventoryCount>
                   </div>
                   <div style={{width: "50px", position: 'relative' , marginTop: "5px"}}>
                  <Link to="/cart"><IconImage className="fas fa-cart-arrow-down" style={location.pathname === "/cart" ? {color: "#04a3ff"} : {color: "white"}}></IconImage></Link> 
                     <InventoryCount>{currentUser ? userDetails.cart.length : cartInventory.length}</InventoryCount>
                   </div>
   
                   <div style={{width: "50px", position: 'relative'}}>
                      {
                        currentUser ?
                         <> 
                        <UserNamePH title={"Log Out"}onClick={signout}> <UserName>{userDetails?.username || "Username" }</UserName></UserNamePH>
                       
                        </> :
                         <Link to="/login"><UserNamePH title={"Log In"}onClick={signout}> <UserName>{"Log In"}</UserName></UserNamePH></Link>
                      }

                   
                  
                    </div>
                   
                 </IconsPH>
            </Head>
            <Outlet />
          </React.Fragment>  
        );
    };

const Head = styled.div`
 background: #00010F;
 position: fixed;
 top: 0;
 width: 100vw;
 height: 80px;
 z-index: 4;
 color: white;
 @media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  height: 90px;
 }
  @media(min-width: 1365px) {
    display: flex;
    justify-content: space-between;
  }
`,
HeaderPH = styled.div`
font-family: poppins;
color: white;
@media (max-width: 767px) { 
  position: absolute;
  right:70px;
  top: 70px;
  height: 200px;
  width: 200px;

}

@media (min-width: 768px) {
  display: flex;
flex-direction: row;
margin: auto;
width: 100vw;
margin-top: 2px;
justify-content: center;
}

@media(min-width: 1365px) {
  width: 1365px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,
LogoPH = styled.div`
 width: 150px;
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-left: 50px;
 margin-top: 10px;
 @media (max-width: 500px) {
  margin-left: 20px;
 }
 @media (min-width: 768px) {
  margin-bottom: 10px;
  margin-left: 20px;
}
`,

LogoImage = styled.img`
width: 35px;
`,
LogoName = styled.h5`
font-size: 5vw;
margin-top: 20px;
margin-left: 10px;
font-family: playball;
@media(min-width: 480px) {
  font-size: 20px;
}
@media (min-width: 768px) {
  font-size: 20px;
}
`,
Nav = styled.ul`
 font-family: poppins;

 color: white;
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 text-align: center;
 margin-top:10px;
height: 100%;

display: ${props => props.navDisplay};
@media (min-width: 768px) {
  background: transparent;
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-auto;
  justify-content: space-between;
  margin-top:40px;
  height: fit-content;
}
@media (min-width: 1365px) {
  height: 30px;
}

`,
Hamburger = styled.i`
color: white;
font-size: 20px;
position: absolute;
right: 50px;
top: 35px;
cursor: pointer;
@media (max-width: 500px) {
  right: 20px;
 }
@media (min-width: 768px) {
 display: none
}

`,
NavList = styled.li`
 color: white;
 list-style: none;
 margin-left: 20px;

 @media (max-width: 767px) {

  background: #03a4ff;
 padding: 10px;
 border-top-left-radius: 10px ;
 border-bottom-left-radius: 10px ;
 width: 250px;
 :hover {
   background: #350bf4;
 }
 }
 @media (min-width: 768px){
   font-size: 20px;
 }
 @media(min-width: 1365px) {
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 70px;
}

`,
UserNamePH = styled.div`
width: 90px;
height: 30px;
text-align: center;
padding: 6px;
background: white;
border-radius: 5px;
position: absolute;
right: -50px;
top: -23px;
cursor: pointer;
:hover{
  background: #04a3ff;
  color: black;
}
`,
UserName = styled.p`
font-family: poppins1;
font-size: 10px;
color: black;
`,
IconsPH = styled.div`
display: flex;
width: fit-content;
@media (max-width: 767px) { display: none}
@media(min-width: 768px) {
  margin-top: 45px;
  justify-content: center;
  width: 200px;
align-items: baseline;
position: relative;
margin-right: 70px;
margin-left: -50px;
}
@media (min-width: 1365px){
  display: flex;
  font-size: 30px;
  justify-content: space-evenly;
  align-items: baseline;
  width: 200px;
  margin-top: 35px;
  position: relative;
  margin-right: 100px;
}
`,
Icons = styled.ul`
color: white;
display: flex;
justify-content: space-evenly;
@media (min-width: 768px) {
  display: none;
}
`,
NavIcon = styled.li`
color: white;
`
,
IconImage = styled.i`
color: white;
@media (min-width: 1365px){
  font-size: 20px;
}
`,
InventoryCount = styled.span`
  font-family: poppins1;
  font-size: 13px;
  position: absolute;
  top: 0px;
  @media (max-width: 1365px) {
      top: -10px;
  font-size: 12px;
  }

  
`
export default Layout;

