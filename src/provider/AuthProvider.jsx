import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../auth/firebase.config';
const provider = new GoogleAuthProvider();
export const AuthContext= createContext(null);



const AuthProvider = ({ children }) => {

    const [loadedRooms,setLoadedRooms]=useState([]);
    const [user, setUser] = useState(null);
    const [isLoding, setIsLoding] = useState(true);



    const createUser = (email, password) => {
        setIsLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setIsLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignInbyPop = () => {
        setIsLoding(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {

        const unsub = () => {
            onAuthStateChanged(auth, (curentUser) => {
                setUser(curentUser);
                console.log(curentUser);
                setIsLoding(false)

            })



        }
        return unsub();

    }, [])

    const logOut = () => {
        setIsLoding(true)
        return signOut(auth);
    }


  







    const allChildren = {
        createUser,
        signInUser,
        googleSignInbyPop,
        user,
        logOut,
        isLoding,
        auth,
        loadedRooms,
        setLoadedRooms,

    }



    return (
        <div>
            <AuthContext.Provider value={allChildren}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;