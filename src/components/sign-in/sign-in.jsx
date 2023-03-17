import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "..//custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
  SigninContainer,
  GoogleButton,
  Icon,
  GoogleText,
  Or,
  ButtonsBarContainer,
  ShowIcon,
  HideIcon,

} from "./sign-in.styles.jsx";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <SigninContainer>
        <GoogleButton onClick={signInWithGoogle} isGoogleSignIn>
          <Icon />
          <GoogleText>continue with google</GoogleText>
        </GoogleButton>
        <Or>or</Or>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type={this.state.showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <div
            onClick={() =>
              this.setState({ showPassword: !this.state.showPassword })
            }
          >
            {this.state.showPassword ? <ShowIcon /> : <HideIcon />}
          </div>

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SigninContainer>
    );
  }
}

export default SignIn;
