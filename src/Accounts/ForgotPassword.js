import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Picture from "../Images/AccountsPicture.png";
import { useState } from "react";
import { useAuth } from "../Contexts/Auth";
const ForgotPassword = () => {
    const [userEmail, setUserEmail] = useState("");
    const { resetPassword } = useAuth()
    const [display, setDisplay] = useState("none");
    const [error, setError] = useState("");
    const [errorDisplay, setErrorDisplay] = useState("none");
    let navigate = useNavigate();
  const forgotPasswordUser = async (e) => {
    e.preventDefault()

    try {
      setDisplay("block")
      await resetPassword(userEmail)
      setErrorDisplay("block") 
      setError("Please Check Your Email.")
      var redirect = setTimeout(() => {
        navigate('/login', { replace: true }) 
      }, 5000)
     

    } catch (error) {
      setError(error.code.slice(5).replace(/-/g, " "))
      setErrorDisplay("block")
      setTimeout(() => {
          setErrorDisplay("none") 
          setError("")
      }, 5000)
      return setDisplay("none")
    }
    return () => clearTimeout(redirect)
  };

  return (
    <LoginContainer>
      <LoginSection>
        <Title>Forgot Password</Title>
        <ErrorAlert errorDisplay={errorDisplay}>{error}</ErrorAlert>
        <LoginForm onSubmit={forgotPasswordUser}>
          <UsernameInput
            type="text"
            required={true}
            placeholder="Enter Your Email Here"
            onChange={(e) => setUserEmail(e.target.value)}

          />
            <Loader className="loader" display={display} />
          <LoginButton type="submit">
            PROCEED
          </LoginButton>
          <Text>
            I want to retry!{" "}
            <CreateAccount to="/login">Cancel</CreateAccount>{" "}
          </Text>
        </LoginForm>
      </LoginSection>
      <LoginPicture src={Picture} alt="ForgotPassword Page Image" />
    </LoginContainer>
  );
};

export default ForgotPassword;
const LoginContainer = styled.div`
    position: relative;
    margin: auto;
    width: 100vw;
    color: white;
    margin-top: 100px;
    @media (min-width: 1365px) {
      width: 1365px;
     }
  `,
  Loader = styled.div`
    margin-top: 20px;
    display: ${(props) => props.display};
  `,
  ErrorAlert = styled.div`
  background: #04a3ff;
  padding: 15px;
  border-radius: 5px;
  font-family: poppins2;
  margin: 0px 10px -20px 10px;
  color: white;
  text-transform: capitalize;
    display: ${(props) => props.errorDisplay};
  `,
  LoginSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 375px) {
    width: 80%;
    margin: auto;
  }
  @media (min-width: 500px) {
    width: 400px;
    margin: auto;
  }
  @media (min-width: 1024px) {
    width: 350px;
    margin-left: 100px;
  };
  @media (min-width: 1224px) {
    width: 400px;
    margin-left: 200px;
   }

  `,
  LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  `,
  UsernameInput = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid white;
    font-family: poppins2;
    margin: 40px 10px 20px 10px;
    background: transparent;
    :focus {
      outline: none;
    }
    color: white;
  `,
  CreateAccount = styled(Link)`
    font-family: poppins2;
    color: #04a3ff;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;
    :hover {
      color: white;
    };
 
  `,
  LoginButton = styled.button`
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-family: poppins;
    margin: 30px 10px;
    font-family: poppins1;
    font-size: 18px;
    cursor: pointer;
    :hover {
      background: #04a3ff;
      color: white;
    }
    :disabled {
      background: #89cff0;
      color: #03a4;
    }
  `,
  Title = styled.h1`
    font-family: poppins1;
    text-align: center;
  `,
  Text = styled.p`
    font-family: poppins2;
    text-align: center;
    font-size: 4.5vw;
    @media (min-width: 375px) {
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 15px;
    }
  `,
  LoginPicture = styled.img`
   display: none;
   @media (min-width: 1024px) {
     display: block;
     width: 400px;
     position: absolute;
     right: 100px;
     top: 0px;
   }
   @media (min-width: 1224px) {
    width: 450px;
    right: 150px;
   }
  `;

