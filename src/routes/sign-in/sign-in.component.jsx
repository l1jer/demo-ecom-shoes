// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const res = await getRedirectResult(auth);
  //   console.log(res);
  //   if (res) {
  //     const userDocRef = await createUserDocumentFromAuth(res.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </>
  );
};

export default SignIn;
