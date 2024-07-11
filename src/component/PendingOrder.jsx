import React from "react";
import recentorderimg from "../images/recent-order-img.png";

const PendingOrder = () => {
    return(
        <>
            <div className="recent-order-box flex justify-between py-4 ">
                <div className="recent-order-left flex gap-4">
                    <div className="order-img">
                        <img src={recentorderimg} alt="" />
                    </div>

                    <div className="order-content">
                        <h6 className="inter-font font-normal text-[14px]">iPhone 13</h6>
                        <p className="inter-font font-medium text-[14px]">₦730,000.00 x 1</p>
                    </div>
                </div>

                <div className="date-status">
                    <p className="date inter-font font-normal text-[14px] text-[#A6A8B1]">12 Sept 2022</p>
                    <p className="status inter-font font-normal text-[12px] text-[#CC5F5F] bg-[#F57E771F] rounded p-1 text-center">Pending</p>
                </div>
                
            </div>
            <hr />
        </>
        
    )
    
}

export default PendingOrder;