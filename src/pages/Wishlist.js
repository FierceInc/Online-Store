import styled from "styled-components";
import { Link } from "react-router-dom";
import { getSneaker } from "../testData";
import { useAuth } from "../Contexts/Auth";
import { useDatabase } from "../Contexts/FirestoreContext";
import { useEffect, useState } from "react";

const Wishlist = () => {

  const {currentUser } = useAuth();
  const [loader, setLoader] = useState(true);
  const {getData,  removeFromUserWishlist,  addToUserCart} = useDatabase();
  const [userDetails, setUserDetails] = useState({wishlist: [], cart: []});
  const [confirmation, setConfirmation] = useState("none");
  const [confirmText, setConfirmText] = useState("");
  useEffect(() => {
    let subed = true;
    if(currentUser) {
    getData(currentUser.uid).then(user => {
      if(subed ) {
         setUserDetails(user)
          setLoader(false)
      }
         
      }
    )
    }

let time = setTimeout(() => {
        setLoader(false)
      },  2000)
  
    return () => {
      subed = false;
      clearTimeout(time)}
  }, [currentUser, getData, userDetails]);
  useEffect(() => {
    if(confirmText) {
      setConfirmation("block")
    }
    setTimeout(() => {
      setConfirmation("none")
      setConfirmText("")
    }, 1000);
  }, [confirmText]);
  return (

    <WishListContainer>
    {<ConfirmationText confirmation={confirmation} className="confirm">{confirmText}</ConfirmationText>}
      {loader ? <div className="splash" /> : currentUser && userDetails.wishlist.length > 0 ? (
        <>
          <AddAll
            onClick={() => {
              if(currentUser) {
                userDetails.wishlist.forEach(item => {
                  if(!userDetails.cart.includes(item)) {
                    addToUserCart(currentUser.uid, item)
                    setConfirmText("All Items Added")
                    removeFromUserWishlist(currentUser.uid, item)
                  } 
                })
              }
            }
              
           
            }
          >
            All<Icon1 className="fas fa-cart-plus "></Icon1>
          </AddAll>
          <WishListGrid>
            <WishListList>
              {userDetails.wishlist.map((sneaker) => {
                return (
                  <WishListItems key={sneaker.id}>
                    <ProductImg src={sneaker.image} alt="product image" />
                    <NameAndSize>
                      <Linked to={`/products/product/${sneaker.id}`}>
                        {" "}
                        <Name title={sneaker.name}>{sneaker.name.split("-").slice(0, 4).join(" ")+"..."}</Name>
                      </Linked>
                      <Size>
                        Size:{" "}
                        <PickedSize>{sneaker.size}</PickedSize>
                      </Size>
                    </NameAndSize>
                    <Icons>
                      <Icon
                        className="fas fa-cart-plus "
                        onClick={() => {
                          if(currentUser) {
                            if (!userDetails.cart.find((s) => s.id === sneaker.id)) {
                              addToUserCart(currentUser.uid, sneaker)
                              setConfirmText("Added To Cart")
                              removeFromUserWishlist(currentUser.uid, sneaker)
                           }
                           else {
                              setConfirmText("Already In Cart")
                           }
                         
                          }
                        }}
                      ></Icon>

                      <Icon
                        className="fas fa-recycle"
                        onClick={() =>
                          removeFromUserWishlist(currentUser.uid, getSneaker(sneaker.id))
                        }
                      ></Icon>
                    </Icons>
                  </WishListItems>
                );
              })}
            </WishListList>
         
          </WishListGrid>
        </>
      ) : !currentUser ? (
        <EmptyWishlist>
          <WishListEmpty>Login To Edit Your Wishlist.</WishListEmpty>
          <LinkButton to="/login">Login</LinkButton>
        </EmptyWishlist>
      ) :   (
        <EmptyWishlist>
          <WishListEmpty>Your Wishlist Is Empty.</WishListEmpty>
          <LinkButton to="/products">Add Items</LinkButton>
        </EmptyWishlist>
      ) }
    </WishListContainer>
  );
};
export default Wishlist;

const WishListContainer = styled.div`
    position: relative;
    margin: auto;
    width: 100vw;
    color: white;
    margin-top: 150px;
    @media(min-width: 1365px) {
      width: 1365px;
      margin: auto;
    }
  `,
  WishListGrid = styled.div`
   width: 100%;
    margin: auto;
    @media(min-width: 1224px) {
      margin-top: 150px;
    }

  `,
  ConfirmationText = styled.div`
    display: ${props => props.confirmation};
    width: 150px;
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
  `,
  WishListList = styled.ul`
   display: flex;
   flex-direction: column;
   height: fit-content;
   padding: 0 10px;
   padding-bottom: 60px;
   @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    padding: 0 30px;
    grid-column-gap: 10px;
  }
  `,
  WishListItems = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100px;
    border: 1px solid #04a3;
    margin-bottom: 20px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    :hover {
      background: #04a3ff;
      opacity: 0.9;
    }
    @media(min-width: 500px) {
      width: 100%;
    }
    @media(min-width: 700px) {
      width: 45vw;
    }
    @media(min-width: 1365px) {
      width: 600px;
    }

  `,
  Linked = styled(Link)`
    color: white;
    text-decoration: none;
  `,
  AddAll = styled.button`
    padding: 2px;
    width: 60px;
    border: 1px solid white;
    background: black;
    color: white;
    font-size: 15px;
    font-family: poppins;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background: #04a3;
    }
    position: absolute;
    top: -40px;
    right: 30px;
    @media(min-width: 700px) {
      top: -40px;
      right: 100px;
    }
  `,
  NameAndSize = styled.div`
    font-family: poppins;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    width: 150px;
  `,
  Name = styled.h3`
  font-size: 4vw;
    :hover {
      color: rgb(0, 1, 75);
    }
    @media (min-width: 425px) {
      font-size: 14px;
    }
  `,
  Size = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 4vw;
    @media (min-width: 425px) {
      font-size: 14px;
    }
  `,
  PickedSize = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 100%;
  margin-left: 10px;
  text-align: center;
  padding: 3px;
  margin-top: -2px;
  `,
  ProductImg = styled.img`
    width: 30vw;
    height: 15vw;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 10px;
    @media (min-width: 425px) {
      width: 110px;
      height: 60px;
    }
  `,
  Icons = styled.div`
    display: flex;
    width: 100px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 60px;
  `,
  Icon = styled.i`
    font-size: 4vw;
    :hover {
      color: rgb(0, 1, 75);
    }
    @media (min-width: 425px) {
      font-size: 18px;
    }
  `,
  Icon1 = styled.i`
    font-size: 15px;
  `,
  WishListEmpty = styled.h2`
    font-family: poppins;
  `,
  LinkButton = styled(Link)`
    width: 190px;
    padding: 16px;
    background: white;
    color: black;
    font-size: 20px;
    text-decoration: none;
    font-family: poppins;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background: #04a3ff;
      color: white;
    }
  `,
  EmptyWishlist = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 200px;
    margin: auto;
    margin-top: 200px;
    flex-direction: column;
    width: 100vw;
    font-size: 5vw;
    align-items: center;
    @media (min-width: 425px) {
      font-size: 20px;
    }
  `;
