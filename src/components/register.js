import React from "react";
import axios from "axios";
import { useState } from "react";

export const Register =()=>{

    const [name,setname]=useState();
    const[email,setemail]=useState();
    const [password,setpassword]=useState();
 

    const register=()=>{
        var body = {
            name: name,
            email:email,
            password:password
        }
        
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/register',
            data: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }


    return(

        <>
        <div>
            
                <h1>Register</h1>
                <h3>Name</h3>
                <input type="text" onChange={(event) => setname(event.target.value)} />
                <h3>Email</h3>
                <input type="email" onChange={(event) => setemail(event.target.value)} />
                <h3>password</h3>
                <input type="password" onChange={(event) => setpassword(event.target.value)}/>
                <button onClick={()=>register()}>submit</button>
            
        </div>
        </>
    )
}