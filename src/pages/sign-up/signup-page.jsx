import SignUp from "../../components/sign-up/sign-up";
import {
  SignUpContainer,
  SignUpTextContainer,
  SignUpTittle,
  SignUpRedirect,
  Span,
} from "./signup-page.styles";
import Header from "../../components/header/header.component";

const SignUpPage = () => (
  <SignUpContainer>
    <Header />
    <SignUpTextContainer>
      <SignUpTittle>Create an account</SignUpTittle>
      <SignUpRedirect>
        already got an account? <Span to="/signin">sign in</Span>
      </SignUpRedirect>
    </SignUpTextContainer>
    <SignUp />
  </SignUpContainer>
);

export default SignUpPage;
