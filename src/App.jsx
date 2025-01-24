import "./App.css";
import { SignInWithGooglePopup } from "./firebase/auth/auth.googlePopUp.jsx";
import { UserContext } from "./contexts/User.context.jsx";
import { useContext, useEffect } from "react";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <>
      <h1>{currentUser?.displayName}</h1>
      <button onClick={SignInWithGooglePopup}>Sign In</button>
    </>
  );
}

export default App;
