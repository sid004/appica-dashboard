import React from "react";
import productblue from "../images/product-blue.png";
import abandoncart from "../images/abandon-cart.png"
import { PieChart } from '@mui/x-charts/PieChart';
import RecentOrders from "./RecentOrders";
import GraphSummary from "./GaphSummary";

const BottomDashboardLeft = () => {
    return (
        <div className="flex-col lg:flex-row flex  justify-around bg-[#f4f5fa] p-4">
            <div className="w-full lg:w-8/12 flex flex-col">
                <div className="flex-col lg:flex-row bottomdashboard  py-4 flex gap-6">
                    <div className="w-full lg:w-6/12 marketing-box bg-[#FFFFFF] p-4 rounded-lg">
                        <div className="box-top flex justify-between items-center">
                            <div className="box-img">
                                <h6 className="inter-font">Marketing</h6>
                            </div>

                            <div className="select-week">
                                <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                                    <option value="" selected >This week</option>
                                    <option value="">This Month</option>
                                    <option value="">This Year</option>
                                </select>
                            </div>
                        </div>

                        <div className="marketing-pie pt-10">
                            

                            <PieChart
                                colors={["#5570F1","#97A5EB","#FFCC91"]}
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'series A', color: '#97A5EB'},
                                            { id: 1, value: 15, label: 'series B', color: '#FFCC91' },
                                            { id: 2, value: 20, label: 'series C', color: '#5570F1' },
                                        ],
                                        innerRadius: 90,
                                        outerRadius: 110,
                                        paddingAngle: 0,
                                        cornerRadius: 0,
                                        startAngle: 720,
                                        endAngle: 144,
                                        cx: 150,
                                        cy: 130,
                                        
                                    }
                                ]}
                                width={330}
                                height={250}
                                
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 marketing-box flex flex-col gap-6">
                        <div className="box-top bg-[#5570F1] rounded-lg p-4">
                            <div className="box-img">
                                <img src={productblue} />
                            </div>

                            <div className="box-content flex justify-between pt-14">
                                <div className="product text-[#FFFFFF]">
                                    <h6>All Product</h6>
                                    <h5>45</h5>
                                </div>

                                <div className="active text-[#FFFFFF]">
                                    <h6>Active</h6>
                                    <h5>32</h5>
                                </div>
                            </div>

                        </div>

                        <div className="box-top bg-[#FFFFFF] rounded-lg p-4">
                            <div className="flex justify-between">
                                <div className="box-img">
                                    <img src={abandoncart} />
                                </div>

                                <div className="select-week">
                                    <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                                        <option value="" selected >This week</option>
                                        <option value="">This Month</option>
                                        <option value="">This Year</option>
                                    </select>
                                </div>
                            </div>


                            <div className="box-content flex justify-between pt-14">
                                <div className="product">
                                    <h6 className="text-[#CC5F5F]">Abandoned Cart</h6>
                                    <h5>20% <span className="inter-font text-[#519C66] text-[14px]">+20.00%</span></h5>
                                </div>

                                <div className="active ">
                                    <h6 className="text-[#8B8D97]">Customers</h6>
                                    <h5>30</h5>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <GraphSummary />
            </div>


            <div className="w-full pl-0 lg:w-5/12 lg:pl-6 pt-4 ">
                <RecentOrders />
            </div>


        </div>



    )
}

export default BottomDashboardLeft