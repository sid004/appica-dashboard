import React from "react";
import Number from "./number";
import Header from "./Header";
import BottomDashboardLeft from "./BottomDashboard";


const Dashboard = () => {

    return(
        <div className="dashboard w-10/12 ">
            <Header />
            <Number />
            <BottomDashboardLeft />
            
        </div>
    )
}

export default Dashboard