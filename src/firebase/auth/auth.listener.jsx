import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../firebase.settings.jsx";

const auth = getAuth(firebaseApp);

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
