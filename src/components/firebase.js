


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { signInWithEmailLink } from 'firebase/auth';



const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
  authDomain: "ecell-1b04d.firebaseapp.com",
  databaseURL: "https://ecell-1b04d-default-rtdb.firebaseio.com",
  projectId: "ecell-1b04d",
  storageBucket: "ecell-1b04d.appspot.com",
  messagingSenderId: "324153281020",
  appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
  measurementId: "G-BW02JFHNT6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let responsedata

export default auth;

export const loginwithgoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // // console.log(credential);

            // The signed-in user info.
            const user = result.user;
            console.log(user);

            var body = {
                email:user.email,
                
            }
            
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/loginwithgoogle',
                data: body
            })
            .then(response=> {
              if(response.data.rows.length==0)
              {
                alert("Please register first!")
              }
              else{
                    alert("login sucessfull")
              }
              
            })
            .catch(error=> {
             alert(error);
            });
        
            // <Link to="/" />

            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
}

const checkuser = () => {

    if (responsedata.length > 100) {
        alert("login sucessful")

        localStorage.setItem('token', responsedata);
        window.location.reload();
    }
    else {
        alert("Invalid ")
        alert(responsedata.length)
    }
}

