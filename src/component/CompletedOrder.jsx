import React from "react";
import completeorderimg from "../images/completed-order-img.png";

const CompletedOrder = () => {
    return(
        <>
            <div className="recent-order-box flex justify-between py-4 ">
                <div className="recent-order-left flex gap-4">
                    <div className="order-img">
                        <img src={completeorderimg} alt="" />
                    </div>

                    <div className="order-content">
                        <h6 className="inter-font font-normal text-[14px]">iPhone 13</h6>
                        <p className="inter-font font-medium text-[14px]">₦730,000.00 x 1</p>
                    </div>
                </div>

                <div className="date-status">
                    <p className="date inter-font font-normal text-[14px] text-[#A6A8B1]">12 Sept 2022</p>
                    <p className="status inter-font font-normal text-[12px] text-[#519C66] bg-[#32936F1F] rounded p-1 text-center">Completed</p>
                </div>
                
            </div>
            <hr />
        </>
        
    )
    
}

export default CompletedOrder;