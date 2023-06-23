import React from "react";
import Navbar from "../components/Navbar";

export function Layout({children}: any){
    return(
        <div style={{marginTop:"5rem"}}>
            <Navbar/>
            <main>{children}</main>
        </div>
    )
}