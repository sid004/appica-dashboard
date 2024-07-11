import React from "react";
import PendingOrder from "./PendingOrder";
import CompletedOrder from "./CompletedOrder";


const RecentOrders = () => {
    return(
        <div className="recent-orders bg-[#FFFFFF] p-4 rounded-lg">
            <h6 className="inter-font text-[#45464E] font-medium text-[16px]">Recent Orders</h6>

            <PendingOrder />
            <CompletedOrder />
            <PendingOrder />
            <CompletedOrder />
            <CompletedOrder />
            <CompletedOrder />
            <PendingOrder />
            <PendingOrder />
            <PendingOrder />
    </div>
        
    )
}

export default RecentOrders