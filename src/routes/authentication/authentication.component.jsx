import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async () => {

  //   const res = await getRedirectResult(auth);
  //   console.log(res);
  //   if (res) {
  //     const userDocRef = await createUserDocumentFromAuth(res.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
