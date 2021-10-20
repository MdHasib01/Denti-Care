import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../config/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const auth = getAuth();

    // const setUserName = (details) => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //       .then(result => {
    //       setUser({...details,displayName: name})
    //       })
    //   }

    // login with google 
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            
            .finally(() => setIsLoading(false))
    }

    //observe user state change
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsuscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInWithGoogle,
        logOut,
        isLoading,
        signInWithEmailAndPassword,
        setUser,
        // setUserName
    }
}

export default useFirebase;