import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase.settings.jsx";

const auth = getAuth(firebaseApp);

export const SignOutUser = () => signOut(auth);
