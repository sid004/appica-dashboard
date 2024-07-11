import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";



const Body = () => {
    return(
        <div className="body w-10/12 bg-[#f4f5fa]">
            <Header />
            <Dashboard />

        </div>
    )
}

export default Body;