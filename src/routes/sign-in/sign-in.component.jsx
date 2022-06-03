import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
