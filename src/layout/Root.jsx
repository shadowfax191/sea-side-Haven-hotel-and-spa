import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";


const Root = () => {
    const [theme,setTheme]=useState('light')

    const handleChange=()=>{
        if(theme ==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    return (
        <div data-theme={`${theme}`}>
           <NavBar handleChange={handleChange} ></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;