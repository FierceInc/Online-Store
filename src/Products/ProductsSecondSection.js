import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { getSneaker, getSneakers} from "../testData";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeCartItem} from '../features/cartSlice'
import * as create from '../App/Functions'
import BGimg from '../Images/ProductsBgImage.png'
import { useDatabase } from "../Contexts/FirestoreContext";
import { useAuth } from "../Contexts/Auth";

let colors = ["#04A3FF","#F652A0","#2EE214","#000"]

export default function ProductsSecondSection() {
  let ProductsStored = getSneakers();
  const {currentUser} = useAuth()
  const {getData,addToUserCart,addToUserWishlist,removeFromUserCart, removeFromUserWishlist} = useDatabase()
  const [userDetails, setUserDetails] = useState({wishlist: [], cart: []});
  const [confirmation, setConfirmation] = useState("none");
  const [confirmText, setConfirmText] = useState("");
  let Cart = useSelector(state => state.cart.value)
  let dispatch = useDispatch()
useEffect(() => {
  let subed = true;
  if(currentUser) {
  getData(currentUser.uid).then(user => {
    if(subed) {
       setUserDetails(user)
    }
       
    }
  )
  }
  return () => {
    subed = false
  }
}, [currentUser, getData, userDetails]);
useEffect(() => {
  if(confirmText) {
    setConfirmation("block")
  }
 let time =  setTimeout(() => {
    setConfirmation("none")
    setConfirmText("")
  }, 3000);
  return () => {
    clearTimeout(time)
  }
}, [confirmText]);

  return (
    <SecondSection>
           {<ConfirmationText confirmation={confirmation} className="confirm">{confirmText}</ConfirmationText>}
      <BackgroundImage src={BGimg} />
      <LeftSection>
        <SearchBar placeholder="SEARCH"/>
        <ProductsMenu>
          <MenuItem>All</MenuItem>
          <MenuItem>Adidas</MenuItem>
          <MenuItem>Nike</MenuItem>
          <MenuItem>Vans</MenuItem>
          <MenuItem >
          <span style={{marginBottom: "20px"}}>Color:</span>
          </MenuItem>
          <Colors>
           {
             colors.map(color => {
               return <Color color={color} key={Date.now() * Math.random()} ></Color>
             })
           }
          </Colors>
        </ProductsMenu>
      </LeftSection>
      <RightSection>
        <ProductsGrid>
          {
            ProductsStored.map(product => {
              return(
                <Products key={product.id + product.image}>
                  <WishListStatus className="fas fa-heart"  style={
                  currentUser && userDetails.wishlist.find(elem => elem.id === product.id) ? {color: "lime"} : {color: ""} }
                onClick={async () => {
                    if(currentUser) {
                      !userDetails.wishlist.find(elem => elem.id === product.id) 
                      ? addToUserWishlist(currentUser.uid, getSneaker(product.id))
                      : removeFromUserWishlist(currentUser.uid, getSneaker(product.id))
                    } 
                    else {
                 
                    setConfirmText("Login To Start Using Your Wishlist.")
                    }

                }} />
                  <Product>
                      <ProductImage src={product.image} />
                  </Product>
                  <CartStatus className="fas fa-cart-plus"
                  style={
                      currentUser && userDetails.cart.find(elem => elem.id === product.id) ? {color: "red"} : Cart.find(elem => elem.id === product.id) ? {color: "red"}: {color: ""} 
                  }
                  onClick={() => {
                    if(currentUser) {
                      !userDetails.cart.find(elem => elem.id === product.id) 
                      ? addToUserCart(currentUser.uid, getSneaker(product.id))
                      : removeFromUserCart(currentUser.uid, getSneaker(product.id))
                    }
                    else {
                      !Cart.find(elem => elem.id === product.id) 
                      ? dispatch(addToCart(product))
                      : dispatch(removeCartItem(product.id))
                    }
                  }} />
                  <ProductInformation>
                  <NoLink to={`/products/product/${product.id}`}>
                    <ProductName>{product.name.slice(0, 15)}</ProductName>
                    </NoLink>
                    <ProductPrice>{create.productPrice(product.price)}</ProductPrice>
                  </ProductInformation>
                  
                </Products>
              )
            })
          }
        </ProductsGrid>
      </RightSection>
    </SecondSection>
  );
}



const SecondSection = styled.div`
  width: 100vw;
  margin-auto;
  position: relative;
  color: white;
  margin-top: 20px;
  @media (max-width: 320px) {

  }
  @media (min-width: 500px) and (max-width: 768px) {
   top: -80px
  };
  @media (min-width: 1365px) {
    width: 1356px;
    margin:auto;
};
 
  `,
  BackgroundImage = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: 0;
    width: 400px;
    height: 500px;
};
@media (min-width: 1120px) {
  left: 90px;
};
  `,

  LeftSection = styled.div`
 display: flex;
 flex-direction: column;
 width: 100vw;
  position: sticky;
  top: 70px;
  padding: 20px 0;
  background: black;
  z-index: 1;

@media (min-width: 768px) {
  width: 200px;
  margin-left: 10px;
  justify-content: center;
  margin-top: 100px;
  background: transparent;
};
@media (min-width: 769px) {
  width: 200px;
  margin-left: 10px;
  justify-content: center;
  margin-top: 30px;
};
@media (min-width: 1120px) {
  margin-left: 100px;
};
  `,
  RightSection = styled.div`
  width: 100vw;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  `,
  ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  margin: auto;
  width: 90%;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-column-gap: 10px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
    grid-column-gap: 10px;
    position: absolute;
    top: 30px;
    z-index: 3;
    right: 20px;
    height: 450px;
    overflow-y: scroll;
    
  }
  @media (min-width: 1120px) {
    width: 800px;
    right: 100px;
};
  `,
  Product = styled.div`
  width: 75%;
  height: auto;
  margin: 20px;
  margin-top: 50px;
  `,
  Products = styled.div`
  width: 40vw;
  height: fit-content;
  position: relative;
  @media (min-width: 700px) {
    width: 30vw;
  }
  @media (min-width: 768px) {
    width: 20vw;
  }
  @media (min-width: 1120px) {
    width: 250px;
};
  `,

  ProductInformation = styled.div`
  display: flex; 
  flex-direction: column;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background: #03b4;
  height: 60px;
padding: 10px;
  `,

  ProductName = styled.p`
  font-family: poppins;
  color: white;
  font-size: 4vw;
  margin-bottom: 10px;
  @media (min-width: 500px) {
    font-size: 14px;
  }
  `,
  ProductPrice = styled.p`
  font-family: arial;
  color: white;
  font-size: 4vw;
  @media (min-width: 500px) {
    font-size: 14px;
  }
  `,

  ProductImage = styled.img`
 width: 100%;

  `,
  WishListStatus = styled.i`
position: absolute;
right: 40px;
top: 10px;
cursor: pointer;
:hover {
  color: #04a3ff;
}
  `,
 CartStatus = styled.i`
 position: absolute;
 top: 10px;
 right: 10px;
 cursor: pointer;
:hover  {
  color: #04a3ff;
}
  `,
  NoLink = styled(Link)`
  text-decoration: none;
  `,


  SearchBar = styled.input`
 padding: 5px 20px;
 width: 80%;
 margin: auto;
 height:40px;
 font-family: poppins1;
 border: none;
 border-radius: 5px;
 :focus {
   outline: none;
 };
 @media (min-width: 500px) {
  width: 400px;
  margin: auto;
};
@media (min-width: 768px) {
  width: 100%;
}
  `,
    ProductsMenu = styled.div`
display: flex;
flex-direction: row;
font-family: poppins;
width: 100%;
justify-content: space-evenly;
margin-top: 20px;
@media (min-width: 500px) {
  width: 400px;
  margin: auto;
  margin-top: 30px;
};
@media (min-width: 768px) {
 flex-direction: column;
 width: 70%;
 margin-top: 20px;
 margin-left: 20px;
 height: 200px;
}
  `,
  MenuItem = styled.li`
list-style: none;
font-size: 5vw;
@media (min-width: 375px) {
  font-size: 18px;
}

  `,

 
  Colors = styled.div`
display: none;
`,
Color = styled.div`
  width: 20px;
  position: relative;
  height: 20px;
  border-radius: 100%;
  border: 1px solid white;
  font-size: 14px;
  margin-right: 10px;
  padding-top: 3px;
  cursor: pointer;
  text-align: center;
  :hover {
    background: ${props => props.color};
  };
`,
ConfirmationText = styled.div`
display: ${props => props.confirmation};
width: 300px;
font-family: poppins1;
color: white;
height: 30px;
position: absolute;
top: -60px;
left: 45%;
border-radius: 5px;
background: #04a3ff;
font-size: 14px;
padding: 5px;
text-align: center;
z-index: 100;
cursor: pointer;
:hover {
  color: #02a3ff;
}
`
