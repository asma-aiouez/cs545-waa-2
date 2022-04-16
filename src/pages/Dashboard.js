import React from "react";
import Header from "../containers/Headers/Header";
import PageRoutes from "./PageRoutes";


const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="header">
                <Header />
            </div>
            
            <div className="Post">
                <PageRoutes />
            </div>


        </React.Fragment>


    )
}

export default Dashboard;