import React, { useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [logged, setLogged] = useState(false);
    const [userEmail, setUserEmail] = useState()

    const provider = new GoogleAuthProvider();

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            Swal.fire('Usuario generado correctamente!');
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: errorCode && errorMessage
            })
            // ..
        });    }

    const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            setUserEmail(user.email)
            Swal.fire('La sesión ha sido iniciada correctamente!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: errorCode && errorMessage
            })
      });
    }

    const logout = () => {

        signOut(auth).then(()=> {
          Swal.fire('Ha cerrado sesión');
        }).catch ((error)=>{
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: error.message
          });
        })
    }

    const googleAuth = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        Swal.fire('La sesión ha sido iniciada correctamente!');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: errorMessage && email && errorCode && credential
        });
        // ...
      });
    }

    useEffect (
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user);
                  setLogged(true);
                  // ...
                } else {
                  // User is signed out
                  // ...
                  setLogged(false);
                }
              });
        },
        []
    )

    return (
        <UserContext.Provider value={{
            user,
            userEmail,
            logged,
            login,
            logout,
            signup,
            googleAuth
        }}>
            {children}
        </UserContext.Provider>
    )
}