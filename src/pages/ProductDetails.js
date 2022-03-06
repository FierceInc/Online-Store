import { useParams } from "react-router-dom";
import { getSneaker } from "../testData";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setSize,
} from "../features/wishlistStore";
import {
  addToCart,
  removeCartItem,
  setCartSize,
} from "../features/cartSlice";
import { useEffect, useState } from "react";
import * as create from "../App/Functions";
import { useDatabase } from "../Contexts/FirestoreContext";
import { useAuth } from "../Contexts/Auth";


export default function Product() {
  let params = useParams();
  let sneaker = getSneaker(params.sneakerId);
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.value);
  const {
    removeFromUserCart,
    addToUserCart,
    addToUserWishlist,
    removeFromUserWishlist,
    getData,
  } = useDatabase();
  const [confirmation, setConfirmation] = useState("none");
  const [confirmText, setConfirmText] = useState("");
  const [userDetails, setUserDetails] = useState({ wishlist: [], cart: [] });
  const { currentUser } = useAuth();
  const SizesList = ["3", "4", "5", "6", "7", "8"];

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let time = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);
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

  useEffect(() => {
    let subed = true;
    if (currentUser)
      getData(currentUser.uid).then((data) => {
        if (subed) {
          setUserDetails(data);
        }
      });
    return () => {
      subed = false;
    };
  }, [getData, userDetails, currentUser]);

  if (loader) {
    return <div className="splash" />;
  } else {
    return (
      <ProductInfo>
            {<ConfirmationText confirmation={confirmation} className="confirm">{confirmText}</ConfirmationText>}
        <LeftSection>
          <FirstContainer>
            <FirstText>COMPLETE</FirstText>
          </FirstContainer>
          <SecondContainer>
            <ImgContainer>
              {" "}
              <ProductImage src={sneaker.image} alt={sneaker.name} />
            </ImgContainer>
            <SecondText>THE LOOK</SecondText>
            <ThirdText>WITH STYLE.</ThirdText>
          </SecondContainer>
        </LeftSection>

        <RightSection>
          <ThirdContainer>
            <ProductDetails>
              <ProductName>{sneaker.name.replace(/-/g, " ")}</ProductName>
              <Rating> Rating </Rating>
              <Price>{create.productPrice(sneaker.price)}</Price>
              <ProductIntro>{sneaker.description}</ProductIntro>
            </ProductDetails>
            <div
              style={{
                border: "1px solid gray",
                width: "100%",
                margin: "auto",
              }}
            ></div>
            <Info>
              <SneakerOptions>
                <Details>
                  Availability :{" "}
                  {sneaker.available ? "In Stock" : "Out Of Stock"}
                  <Sizes>
                    <Size style={{fontSize:" 12px"}}>Size : </Size>
                    {cart.find((item) => item.id === sneaker.id) ||
                    userDetails.cart.find((item) => item.id === sneaker.id)
                      ? SizesList.map((size, index) => {
                          return (
                            <div key={index + sneaker.id}>
                              <Size

                                onClick={() => {
                                  if (currentUser) {
                                    removeFromUserCart(currentUser.uid, userDetails.cart.find(item => item.id === sneaker.id))
                                    sneaker.size = size;
                                    addToUserCart(currentUser.uid, sneaker)
                                  }
                                  else {
                                    dispatch(setSize({ id: sneaker.id, size }));
                                    dispatch(setCartSize({ id: sneaker.id, size }));
                                  }
                                 
                                }}
                              >
                                {size}
                              </Size>
                            </div>
                          );
                        })
                      : ""}
                  </Sizes>
                </Details>
                <Buttons>
                  <AddToCart
                    onClick={() => {
                      if (currentUser) {
                        if (
                          !userDetails.cart.find((e) => e.id === sneaker.id)
                        ) {
                          addToUserCart(currentUser.uid, sneaker);
                        } else {
                          removeFromUserCart(currentUser.uid, sneaker);
                        }
                      } else {
                        create.addItemsToCart(
                          cart,
                          sneaker.id,
                          dispatch,
                          addToCart,
                          removeCartItem,
                          sneaker
                        );
                      }
                    }}
                  >
                    {userDetails.cart.find(
                      (s) => s.id === sneaker.id
                    ) || cart.find(item => item.id === sneaker.id) ? (
                      <Icon>
                        Remove <i className="fas fa-cart-arrow-down "></i>
                      </Icon>
                    ) : (
                      <Icon>
                        Add <i className="fas fa-cart-plus "></i>
                      </Icon>
                    )}
                  </AddToCart>

                  {/* WishList Button On Product Details */}
                  <Wishlist
                    className={
                      userDetails.wishlist.find((s) => s.id === sneaker.id)
                        ? "fas fa-heart"
                        : "fas fa-heart-broken"
                    }
                    onClick={() => {
                      if (currentUser) {
                        if (
                          !userDetails.wishlist.find((e) => e.id === sneaker.id)
                        ) {
                          addToUserWishlist(currentUser.uid, sneaker);
                        } else {
                          removeFromUserWishlist(currentUser.uid, sneaker);
                        }
                      } else {
                        setConfirmText("Login To Start Using Your Wishlist.")
                      }
                    }}
                  ></Wishlist>
                </Buttons>
              </SneakerOptions>
            </Info>
          </ThirdContainer>
        </RightSection>
      </ProductInfo>
    );
  }
}

const ProductInfo = styled.div`
    width: 100vw;
    margin: auto;
    display: flex;
    margin-top: 100px;
    flex-direction: column;

    position: relative;
    @media (min-width: 390px) {
      margin-top: 60px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      height: 400px;
    }

    @media (min-width: 768px) {
      width: 768px;
    }
    @media (min-width: 1024px) {
      width: 1024px;
    }
    @media (min-width: 1365px) {
      width: 1365px;
    }
  `,
  LeftSection = styled.div`
    height: 100vw;
    position: relative;
    @media (min-width: 390px) {
      margin: auto;
      width: 400px;
      height: 350px;
      margin-top: 50px;
    }
    @media (min-width: 600px) {
    }
    @media (min-width: 768px) {
      margin-top: 50px;
    }
    @media (min-width: 1024px) {
      margin-left: 100px;
    }
    @media (min-width: 1365px) {
      margin-top: 50px;
      margin-left: 100px;
    }
  `,
  RightSection = styled.div`
    position: relative;
    color: white;
    font-family: poppins2;
    padding: 10px;
  `,
  ProductImage = styled.img`
  width: 90%;
}`,
  Icon = styled.p``,
  ImgContainer = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1365px) {
      width: calc(100% - 70px);
      height: calc(100% - 50px);
    }
  `,
  FirstContainer = styled.div`
    border: 1px solid white;
    width: 80vw;
    height: 80vw;
    position: absolute;
    left: 10px;
    @media (min-width: 390px) {
      width: 300px;
      height: 300px;
    }
    @media (min-width: 1024px) {
      width: 350px;
      height: 350px;
    }
    @media (min-width: 1365px) {
      width: 400px;
      height: 400px;
    }
  `,
  SecondContainer = styled.div`
    border: 1px solid white;
    width: 80vw;
    height: 80vw;
    position: absolute;
    left: 50px;
    top: 50px;
    @media (min-width: 390px) {
      width: 300px;
      left: 60px;
      top: 60px;
      height: 300px;
    }
    @media (min-width: 1024px) {
      width: 350px;
      height: 350px;
    }
    @media (min-width: 1365px) {
      width: 400px;
      height: 400px;
      top: 80px;
      left: 80px;
    }
  `,
  FirstText = styled.p`
    display: none;
    font-size: 44px;
    font-family: poppins1;
    transform: rotate(90deg);
    width: 100px;
    font-weight: 100;
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    position: relative;
    left: -30px;
    top: 100px;
  `,
  SecondText = styled.p`
    display: none;
    font-size: 44px;
    font-family: poppins1;
    font-weight: 100;
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    position: absolute;
    bottom: -10px;
    left: 120px;
  `,
  ThirdText = styled.p`
    display: none;
    font-size: 44px;
    font-family: poppins1;
    transform: rotate(270deg);
    font-weight: 100;
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    position: absolute;
    top: 150px;
    right: -100px;
  `,
  ThirdContainer = styled.div`
    @media (min-width: 390px) {
      width: 100vw;
    }
    @media (min-width: 600px) {
      width: 500px;
    }
    @media (min-width: 768px) {
      width: 350px;
      margin-top: 100px;
      margin-right: 10px;
    }
    @media (min-width: 1024px) {
      margin-right: 20px;
      width: 450px;
    }
    @media (min-width: 1365px) {
      margin-top: 100px;
      margin-right: 100px;
      width: 600px;
    }
  `,
  ProductDetails = styled.div``,
  ProductName = styled.p`
    font-size: 6vw;
    font-family: poppins1;
    margin-bottom: 20px;
    @media (min-width: 390px) {
      font-size: 18px;
    }
  `,
  ProductIntro = styled.p`
    font-size: 4vw;
    font-family: poppins2;
    margin-bottom: 20px;
    @media (min-width: 390px) {
      font-size: 16px;
    }
  `,
  Rating = styled.div`
    font-size: 4vw;
    font-family: poppins2;
    margin-bottom: 20px;
    @media (min-width: 390px) {
      font-size: 16px;
    }
  `,
  ConfirmationText = styled.div`
display: ${props => props.confirmation};
width: 300px;
font-family: poppins1;
color: white;
height: 30px;
position: absolute;
top: -50px;
left: 45%;
border-radius: 5px;
background: #04a3ff;
font-size: 14px;
padding: 5px;
text-align: center;
z-index: 100;
cursor: pointer;
:hover {
  color: #000;
}
`
,
  Price = styled.p`
    font-size: 4vw;
    font-family: poppins1;
    margin-bottom: 20px;
    @media (min-width: 390px) {
      font-size: 16px;
    }
  `,
  Sizes = styled.div`
    display: flex;
    flex-direction: row;
  `,
  Size = styled.div`
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 100%;
    font-size: 10px;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #03a4ff;
      font-size: 15px;
    };
    :active {
      color: lime;
    }
  `,
  Info = styled.div``,
  Buttons = styled.div``,
  AddToCart = styled.button`
    padding: 5px;
    font-family: poppins;
    width: 50vw;
    text-align: center;
    border: none;
    background: white;
    color: black;
    border-radius: 6px;
    cursor: pointer;
    :hover {
      background: #04a3ff;
      color: white;
    }
    text-decoration: none;
    margin-right: 30px;
    margin-top: 20px;
    @media (min-width: 390px) {
      width: 100px;
    }
  `,
  Wishlist = styled.i`
    :hover {
      color: #04a3ff;
    }
    cursor: pointer;
    font-size: 6vw;
    margin-top: 10px;
    @media (min-width: 390px) {
      font-size: 25px;
    }
  `,
  Details = styled.div``,
  SneakerOptions = styled.div``;
