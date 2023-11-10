import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../auth/firebase.config';
import useAxios from '../customHooks/useAxios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
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
    const axios=useAxios();
    


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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setIsLoding(false);

            if(currentUser){
                axios.post('/auth/access-token',loggedUser)
                .then(res=>{

                    // Swal.fire('Logged In', 'You successfully done Login', 'success');
                    toast.success('Logged In Success')
              
                    
                   
                })
                .catch(err => {
                    logOut()

                })
            }

            else{
                axios.post('/auth/logout',loggedUser)
                .then(res=>{
                    
                })
            }
        });
        return () => {
            return unsubscribe();
        }
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