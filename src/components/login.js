import React from "react";
import { useState } from "react";
import axios from "axios";
import { loginwithgoogle } from "./firebase";

export const Login =()=>{

    const[email,setemail]=useState();
    const [password,setpassword]=useState();
 

    const login=(event)=>{
        // event.preventDefault()
        var body = {
            email:email,
            password:password
        }
        
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/login',
            data: body
        })
        .then(response=> {
          if(response.data.rows.length==0)
          {
            alert("Invalid email or password")
          }
          else{
                alert("login sucessfull")
          }
          
        })
        .catch(error=> {
         alert(error);
        });
    
    }



    return(
        <>
        <div>
            
                <h1>Login</h1>
                <h3>Email</h3>
                <input type="email" onChange={(event) => setemail(event.target.value)} />
                <h3>password</h3>
                <input type="password" onChange={(event) => setpassword(event.target.value)}/>
                <input type="submit" onClick={()=>login()}/>

                <button onClick={()=>loginwithgoogle()}>google</button>
            
        </div>
        </>
    )
}