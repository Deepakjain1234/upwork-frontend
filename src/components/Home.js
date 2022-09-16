import React from "react";
import { Login } from "./login";
import { Register } from "./register";
import { useState } from "react";
import './home.css'

export const Home =()=>{
    const [data, changeData] = React.useState('login');
    return(
        <>
        <div className="home">
            <div><button onClick={()=>{changeData('login')}}>login</button>
            <button  onClick={()=>{changeData('register')}}>register</button></div>
            {data=='login' && <Login/>}
            {data=='register' && <Register/>}
        </div>
        </>
    )
}