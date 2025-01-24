import "./App.css";
import { SignInWithGooglePopup } from "./firebase/auth/auth.googlePopUp.jsx";
import { UserContext } from "./contexts/User.context.jsx";
import { useContext } from "react";
import { SignOutUser } from "./firebase/auth/auth.signout.jsx";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <h1>{currentUser?.displayName || "Ausgeloggt"}</h1>
      <button onClick={SignInWithGooglePopup}>Sign In</button>
      <button onClick={SignOutUser}>Sign Out</button>
    </>
  );
}

export default App;
