import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addToCart,
  removeCartItem,
  updateQuantity,
} from "../features/cartSlice";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as create from "../App/Functions";
import { useDatabase } from "../Contexts/FirestoreContext";
import { useAuth } from "../Contexts/Auth";

export default function Cart() {
  let Cart = useSelector((state) => state.cart.value);
  let dispatch = useDispatch();
  let price = [];
  const { removeFromUserCart, addToUserCart, getData } = useDatabase();
  const [userDetails, setUserDetails] = useState({ cart: [] });
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  useEffect(() => {
    let state = true;
    if (currentUser) {
      getData(currentUser.uid).then((data) => {
        if (state) {
          setUserDetails(data);
          setLoading(false);
        }
      });
    }
    let time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      state = false;
      clearTimeout(time);
    };
  }, [currentUser, getData, userDetails]);

  let sortedCart = userDetails.cart.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return (
    <CartContainer>
      {loading ? (
        <div className="splash" />
      ) : (currentUser && userDetails.cart.length > 0) || Cart.length > 0 ? (
        <React.Fragment>
          <CartItemsList>
            {(currentUser ? sortedCart : Cart).map((sneaker) => {
              price.push(sneaker.price * sneaker.quantity);
              return (
                <CartItem key={sneaker.id}>
                  <ProductImg src={sneaker.image} alt="product image" />
                  <NameAndSize>
                    <TitleLink
                      to={`/products/product/${sneaker.id}`}
                      title={sneaker.name}
                    >
                      {sneaker.name.split("-").slice(0, 4).join(" ") + "..."}
                    </TitleLink>
                    <Title>
                      Size : <PickedSize>{sneaker.size}</PickedSize>
                    </Title>
                  </NameAndSize>
                  <Price>
                    {currentUser
                      ? create.productPrice(
                          sneaker.price,
                          userDetails.cart.find((s) => s.id === sneaker.id)
                            .quantity
                        )
                      : create.productPrice(sneaker.price, sneaker.quantity)}
                  </Price>
                  <QuantityContainer>
                    <Quantity
                      className="fas fa-minus"
                      onClick={() => {
                        if (currentUser) {
                          if (
                            userDetails.cart.find((e) => e.id === sneaker.id)
                              .quantity > 1
                          ) {
                            let quantity =
                              userDetails.cart.find((e) => e.id === sneaker.id)
                                .quantity - 1;
                            removeFromUserCart(currentUser.uid, sneaker);
                            sneaker.quantity = quantity;
                            addToUserCart(currentUser.uid, sneaker);
                          }
                        }

                        create.decreaseQuantity(
                          dispatch,
                          updateQuantity,
                          sneaker.quantity,
                          sneaker.id
                        );
                      }}
                    ></Quantity>
                    <Title>{sneaker.quantity}</Title>
                    <Quantity
                      className="fas fa-plus"
                      onClick={() => {
                        if (currentUser) {
                          let quantity =
                            userDetails.cart.find((e) => e.id === sneaker.id)
                              .quantity + 1;
                          removeFromUserCart(currentUser.uid, sneaker);
                          sneaker.quantity = quantity;
                          addToUserCart(currentUser.uid, sneaker);
                        } else {
                          create.increaseQuantity(
                            dispatch,
                            updateQuantity,
                            sneaker.quantity,
                            sneaker.id
                          );
                        }
                      }}
                    ></Quantity>
                  </QuantityContainer>
                  <Delete
                    className="fas fa-recycle  fa-2x  "
                    onClick={() => {
                      if (currentUser) {
                        removeFromUserCart(currentUser.uid, sneaker);
                      } else {
                        create.addItemsToCart(
                          Cart,
                          sneaker.id,
                          dispatch,
                          addToCart,
                          removeCartItem,
                          sneaker
                        );
                      }
                    }}
                  ></Delete>
                </CartItem>
              );
            })}
          </CartItemsList>

          <CheckoutContainer>
            <CheckoutBanner>
              <Totals>
                <Total>
                  Subtotal :{" "}
                  <TotalPrices>{create.TotaltPrice(price)}</TotalPrices>
                </Total>
                <Total>
                  Shipping : <TotalPrices>R 100</TotalPrices>
                </Total>
                <div
                  style={{
                    margin: "20px auto",
                    width: "95%",
                    border: "1px solid white",
                  }}
                ></div>
              </Totals>
              <OrderTotal>
                Order Total:{" "}
                <TotalPrices>{create.TotaltPrice(price, 100)}</TotalPrices>
              </OrderTotal>
              <CheckoutButton>
                Checkout <i className="fas fa-car"></i>
              </CheckoutButton>
            </CheckoutBanner>
          </CheckoutContainer>
          {!currentUser ?   <Warning>All your items will be erased if you refresh the page <TextLink to="/login">LOGIN</TextLink> to save your cart.</Warning> : ""}
        </React.Fragment>
      ) : (
        <EmptyWishlist>
          <WishListEmpty>Your Cart Is Empty.</WishListEmpty>
          <LinkButton to="/products">Add Items</LinkButton>
        </EmptyWishlist>
      )}
    </CartContainer>
  );
}

const CartContainer = styled.div`
    position: relative;
    margin: auto;
    width: 100vw;
    color: white;
    @media (min-width: 1365px) {
      width: 1365px;
    }
  `,
  CartItemsList = styled.ul`
    width: 100%;
    margin: 100px 0 100px 20px;

    @media(min-width: 500px) {
      width: 90vw;
      margin-auto;
    }
    @media(min-width: 1224px) {
      width: 100%;
      margin-auto;
    }
    
  `,
  CartItem = styled.li`
    position: relative;
    width: 90%;
    height: 100px;
    background: #000;
    border: 1px solid #04a3;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    :hover {
      background: #04a3ff;
      opacity: 0.9;
    }
    @media (min-width: 700px) {
      width: 650px;
    }
    @media (min-width: 768px) {
      width: 700px;
    }
    @media (min-width: 1024px) {
      width: 1000px;
    }
  `,
  NameAndSize = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 10px;
  `,
  TitleLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: poppins1;
    :hover {
      color: rgb(0, 1, 75);
    }
    font-size: 3vw;
    width: 70px;
    @media (min-width: 500px) {
      font-size: 13px;
    }
    @media (min-width: 700px) {
      font-size: 15px;
      width: 200px;
    }
    @media (min-width: 768px) {
      width: 300px;
    }
  `,
  ProductImg = styled.img`
    width: 20vw;
    border-radius: 5px;
    @media (min-width: 500px) {
      width: 130px;
    }
  `,
  Title = styled.h5`
    font-family: poppins1;
    display: flex;
    flex-direction: row;
    font-size: 3vw;
    @media (min-width: 500px) {
      font-size: 15px;
    }
  `,
  Quantity = styled.i`
    :hover {
      color: #0664f1;
    }
    cursor: pointer;
    font-size: 3vw;
    @media (min-width: 500px) {
      font-size: 20px;
    }
  `,
  Delete = styled.i`
    :hover {
      color: red;
    }
    cursor: pointer;
    font-size: 4vw;
    position: absolute;
    top: 7px;
    right: 7px;
    @media (min-width: 500px) {
      font-size: 16px;
    }
  `,
  QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-evenly;
    align-items: center;
  `,
  Price = styled.h5`
    font-family: poppins1;
    width: 250px;
    font-size: 3vw;
    @media (min-width: 500px) {
      font-size: 15px;
    }
  `,
  PickedSize = styled.div`
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 100%;
    margin-left: 0px;
    text-align: center;
    padding: 3px;
    margin-top: -2px;
  `,
  CheckoutBanner = styled.div`
    background: #04a3ff;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    right: 10px;
    top: 0px;
    :hover {
      width: 90%;
      height: 260px;
      border-radius: 10px;
      right: 10px;
      top: -200px;
      
    }

    position: absolute;

        @media(min-width: 500px) {
      :hover {
        width: 400px;
        height: 260px;
        border-radius: 10px;
        right: 10px;
        top: -200px;
      }
        @media(min-width: 1224px) {
      :hover {
        right: 100px;
        width: 500px;
      }
    }
    @media(min-width: 1224px) {
      right: 100px;
    }

  `,
  CheckoutContainer = styled.div`
    width: 100%;
    height: 0px;
    position: sticky;
    top: 70%;
    bottom: 150px;
    z-index: 1000;
    margin: auto;
  `,
  Totals = styled.div`
    height: 200px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    display: none;
    ${CheckoutBanner}:hover & {
      display: flex;
    } ;
  `,
  Total = styled.h3`
    font-family: poppins2;
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
    align-items: center;
  `,
  TotalPrices = styled.p`
    font-family: poppins2;
    font-size: 15px;
    text-align: center;
  `,
  OrderTotal = styled.h2`
    font-family: poppins2;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    margin: -30px 0 0 35px;
    align-items: center;
    display: none;
    ${CheckoutBanner}:hover & {
      display: flex;
    }
    font-size: 4vw;
    @media (min-width: 500px) {
      font-size: 16px;
    }
  `,
  CheckoutButton = styled.button`
    padding: 5px;
    font-family: poppins;
    width: 100px;
    text-align: center;
    border: none;
    background: white;
    color: black;
    border-radius: 6px;
    cursor: pointer;
    :hover {
      background: #0664f1;
      color: white;
    }
    text-decoration: none;
    position: absolute;
    bottom: 10px;
    right: 50px;
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
  `,
  Warning = styled.p`
  font-size: 3vw;
  font-family: poppins2;
  margin:0px auto 100px auto;
  @media (min-width: 425px) {
    font-size: 15px;
    margin: 0 0 100px 100px;
  };

  `,
  TextLink = styled(Link)`
  font-size: 3vw;
  color: #04a3ff;
  text-decoration: none;
  font-family: poppins1;

  :hover {
    color: white;
  };
  @media (min-width: 425px) {
    font-size: 15px;
  }

  `
