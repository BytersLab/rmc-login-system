import './App.css'
import {SignInWithGooglePopup} from "./firebase/auth/auth.googlePopUp.jsx";

function App() {


  return (
    <>
      <h1>Hello Form</h1>
        <button onClick={SignInWithGooglePopup}>Sign In</button>
    </>
  )
}

export default App
