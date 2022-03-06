import styled from "styled-components";
import { Link } from "react-router-dom";
import Picture from "../Images/AccountsPicture.png";
import { useAuth } from "../Contexts/Auth";
import { initialState, loginReducer } from "../reducers/loginReducer";
import { useReducer } from "react";

const Login = () => {
  const { loginUser } = useAuth();
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { userEmail, Password, isLoading, errorMessage, error } = state;
  
  const signInUser = async (e) => {
    e.preventDefault();
    try {
      dispatch({type:"login"})
      await loginUser(userEmail, Password);
    
    } catch (error) {
     dispatch({type: "error", value: error.code})
      setTimeout(() => {
      }, 5000);
    }
  };

  return (
    <LoginContainer>
      <LoginSection>
        <Title>Log In</Title>
        <ErrorAlert errorDisplay={error}>{errorMessage}</ErrorAlert>
        <LoginForm onSubmit={signInUser}>
          <UsernameInput
            type="text"
            placeholder="Username"
            required={true}
            value={userEmail}
            onChange={(e) => dispatch({type: "field", field: "userEmail", value:e.target.value})}
          />
          <PasswordInput
            type="password"
            placeholder="Password"
            required={true}
            value={Password}
            onChange={(e) => dispatch({type: "field", field: "Password", value:e.target.value})}
          />
          <Loader className="loader" display={isLoading} />
          <PasswordRecovery to="/forgot-password">
            Forgot Password?
          </PasswordRecovery>

          <LoginButton type="submit">LOG IN</LoginButton>
          <Text>
            Don't have an account?{" "}
            <CreateAccount to="/signup">Create An Account.</CreateAccount>{" "}
          </Text>
        </LoginForm>
      </LoginSection>
      <LoginPicture src={Picture} alt="Login Page Image" />
    </LoginContainer>
  );
};

export default Login;
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
    margin-top: 30px;
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
    }
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
  PasswordInput = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid white;
    background: transparent;
    font-family: poppins2;
    margin: 0px 10px;
    :focus {
      outline: none;
    }
    color: white;
  `,
  PasswordRecovery = styled(Link)`
    font-family: poppins2;
    color: white;
    text-decoration: none;
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
    :hover {
      color: #04a3ff;
    }
  `,
  CreateAccount = styled(Link)`
    font-family: poppins2;
    color: #04a3ff;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;
    :hover {
      color: white;
    }
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
