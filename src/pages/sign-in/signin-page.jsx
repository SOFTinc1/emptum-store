import SignIn from "../../components/sign-in/sign-in";
import {
  SignInContainer,
  LoginTextContainer,
  SignInTittle,
  SignUpRedirect,
  Span,
} from "./signin-page.styles";
import Header from "../../components/header/header.component";

const SignInPage = () => (
  <SignInContainer>
    <Header />
    <LoginTextContainer>
      <SignInTittle>Login</SignInTittle>
      <SignUpRedirect>
        No account yet? <Span to="/signup">sign up</Span>
      </SignUpRedirect>
    </LoginTextContainer>
    <SignIn />
  </SignInContainer>
);

export default SignInPage;
