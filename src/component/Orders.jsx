import React from "react";
import { FiPlus } from "react-icons/fi";
import Number from "./number";
import CustomOrderTable from "./OrderTable";
import Header from "./Header";

const Order = () => {
    return(
        <div className="w-10/12">
        <Header />


        
            <div className="flex-col items-start lg:flex-row lg:items-center order-top flex justify-between p-4 pb-0 bg-[#f4f5fa]">
                <div className="order-heading">
                    <h6 className="inter-font font-medium text-[16px]">Orders Summary</h6>
                </div>

                <div className="create-order">
                    <button className="flex gap-4 items-center bg-[#5570F1] text-white px-4 py-4 rounded-lg inter-font"><FiPlus />Create a New Order</button>
                </div>
            </div>

            <Number />
            <CustomOrderTable />
        
        
        </div>
        
        

    )
}

export default Order