import {firebaseApp} from "../firebase.settings.jsx";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

const auth = getAuth(firebaseApp);

export const SignInWithGooglePopup = () => {
    signInWithPopup(auth, provider)
}