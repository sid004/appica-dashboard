import React from "react";
import notification from "../images/Notification.png";
import profile from "../images/profile 1.png"

const Header = () => {
    return(
        <div className="hedaer bg-[#FFFFFF] sticky top-0 z-40">
            <div className="header-top flex justify-between py-4 px-4">
                <div className="page-name">
                    <h5 className="text-[20px] font-medium text-[#45464E]">Dashboard</h5>
                </div>

                <div className="user-notification flex items-center gap-4">
                    <div className="user-select">
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                    <div className="notification">
                        <img src={notification} />
                    </div>

                    <div className="profile">
                        <img src={profile}/>
                    </div>
                </div>
            
            </div>
            <hr />
        </div>
        

        
    )
}

export default Header