import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../auth/firebase.config';
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {

    const [loadedRooms, setLoadedRooms] = useState([]);
    const [price, setPrice] = useState([]);
    const [person, setPerson] = useState([]);
    const [room, setRoom] = useState([]);
    const [user, setUser] = useState(null);
    const [isLoding, setIsLoding] = useState(true);

    const handlePriceValue = (value) => setPrice(value);
    const handlePersonValue = (value) => setPerson(value);
    const handleUnitValue = (value) => setRoom(value);



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
        handlePriceValue,
        handlePersonValue,
        handleUnitValue,
        price, 
        setPrice,
        person, 
        setPerson,
        room,
        setRoom,

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