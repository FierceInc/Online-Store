import styled from "styled-components";
import { Link } from "react-router-dom";
import Picture from "../Images/AccountsPicture.png";
import { useAuth } from "../Contexts/Auth";
import { useDatabase } from "../Contexts/FirestoreContext";
import { useReducer } from "react";
import { initialState, signUpReducer } from "../reducers/signupReducer";

let passwordRules = [
  "Password must contain atleast 1 uppercase letter",
  "Password must contain atleast one number",
  "Password must be greater than 8 characters long",
];

const SignUp = () => {
  const { createUser } = useAuth();
  const { createUserInDB, getData } = useDatabase();
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const {
    userEmail,
    Password,
    username,
    PasswordConfirmation,
    isLoading,
    errorDisplay,
    error,
  } = state;

  const signUpUser = async (e) => {
    e.preventDefault();
    if (Password.length < 8) {
      dispatch({type: "error", value: passwordRules[2]})
      setTimeout(() => {
        dispatch({type: "waiting"})
      }, 5000);
      return
    }
    if (!/^(?=.*[0-9]).+$/.test(Password)) {
      dispatch({type: "error", value: passwordRules[1]})
      setTimeout(() => {
        dispatch({type: "waiting"})
      }, 5000);
      return
    }
    if (Password !== PasswordConfirmation) {
      dispatch({type: "error", value: "Passwords do not match"})
      setTimeout(() => {
        dispatch({type: "waiting"})
      }, 5000);
      return
    }
    if (!/^(?=.*[A-Z]).+$/.test(Password)) {
      dispatch({type: "error", value: passwordRules[0]})
      setTimeout(() => {
        dispatch({type: "waiting"})
      }, 5000);
      return;
    }
    try {
      dispatch({type: "signup"})
      let User = await createUser(userEmail, Password);
      await createUserInDB(User.user.uid, username, userEmail);
      await getData(User.user.uid);
    } catch (error) {
      dispatch({type: "error", value: error.code.slice(5).replace(/-/g, " ")})
      setTimeout(() => {
        dispatch({type: "waiting"})
      }, 5000);
      return
    }
  };

  return (
    <SignUpContainer>
      <SignUpSection>
        <Title>Create Account</Title>
        <ErrorAlert errorDisplay={errorDisplay}>{error}</ErrorAlert>
        <SignUpForm onSubmit={signUpUser}>
          <UsernameInput
            type="text"
            placeholder="Username"
            required={true}
            value={username} 
            onChange={(event) => {
             dispatch({type: "field", field: "username", value: event.target.value})
            }}
          />
          <UserEmailInput
            type="email"
            placeholder="Email Address"
            required={true}
            value={userEmail}
            onChange={(event) => {
              dispatch({type: "field", field: "userEmail", value: event.target.value})
            }}
          />
          <PasswordInput
            type="password"
            placeholder="Password"
            required={true}
            value={Password}
            onChange={(event) => {
              dispatch({type: "field", field: "Password", value: event.target.value})
            }}
          />
          <PasswordConfirm
            type="password"
            placeholder="Confirm Password"
            required={true}
            value={PasswordConfirmation}
            onChange={(event) => {
              dispatch({type: "field", field: "PasswordConfirmation", value: event.target.value})
            }}
          />
          <Loader className="loader" display={isLoading} />
          <SignUpButton type="submit">Sign Up</SignUpButton>
          <Text>
            Already have an account?{" "}
            <CreateAccount to="/login">Log In.</CreateAccount>
          </Text>
        </SignUpForm>
      </SignUpSection>
      <SignUpPicture src={Picture} alt="SignUp Page Image" />
    </SignUpContainer>
  );
};

export default SignUp;
const SignUpContainer = styled.div`
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
  SignUpSection = styled.div`
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
  SignUpForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  UsernameInput = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid white;
    font-family: poppins2;
    margin: 40px 10px 10px 10px;
    background: transparent;
    :focus {
      outline: none;
    }
    color: white;
  `,
  UserEmailInput = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid white;
    font-family: poppins2;
    margin: 10px 10px 10px 10px;
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
    margin: 10px 10px 10px 10px;
    :focus {
      outline: none;
    }
    color: white;
  `,
  PasswordConfirm = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid white;
    background: transparent;
    font-family: poppins2;
    margin: 10px 10px 10px 10px;
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
    }
  `,
  SignUpButton = styled.button`
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
  SignUpPicture = styled.img`
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
