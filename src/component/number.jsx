import React from "react";
import boxone from "../images/boxone.png";
import boxtwo from "../images/boxtwo.png";
import boxthree from "../images/boxthree.png";


const Number = () => {
    return(
        <div className="flex-col lg:flex-row number-box-row flex justify-between gap-6 bg-[#f4f5fa] p-4 pb-0">
            <div className="w-full lg:w-4/12 box-one p-4 bg-[#FFFFFF] rounded-lg">
                <div className="box-top flex justify-between items-center">
                    <div className="box-img">
                        <img src={boxone} />
                    </div>
                    
                    <div className="select-week">
                        <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                            <option value="" selected >This week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className="box-bottom flex items-center pt-12 gap-10">
                    <div className="box-no-one">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Sales</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium"> <del>N</del> 4,000,000.00</h5>
                    </div> 

                    <div className="box-no-two">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Volume</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium">450 <span className="inter-font text-[#519C66] text-[14px]">+20.00%</span> </h5>
                    </div>
                </div>
                
                
            </div>

            <div className="w-full lg:w-4/12 box-one p-4 bg-[#FFFFFF] rounded-lg">
                <div className="box-top flex justify-between items-center">
                    <div className="box-img">
                        <img src={boxtwo} />
                    </div>
                    
                    <div className="select-week">
                        <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                            <option value="" selected >This week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className="box-bottom flex items-center pt-12 gap-28">
                    <div className="box-no-one">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Customers</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium"> 1,250 <span className="inter-font text-[#519C66] text-[14px]">+15.80%</span></h5>
                    </div> 

                    <div className="box-no-two">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Active</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium">1,180 <span className="inter-font text-[#519C66] text-[14px]">85%</span> </h5>
                    </div>
                </div>
                
                
            </div>

            <div className="w-full lg:w-5/12 box-one p-4 bg-[#FFFFFF] rounded-lg">
                <div className="box-top flex justify-between items-center">
                    <div className="box-img">
                        <img src={boxthree} />
                    </div>
                    
                    <div className="select-week">
                        <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                            <option value="" selected >This week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className="box-bottom flex justify-between items-center pt-12 ">
                    <div className="box-no-one">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">All Orders</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium"> 450</h5>
                    </div> 

                    <div className="box-no-two">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Pending</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium">5 </h5>
                    </div>

                    <div className="box-no-two">
                        <h6 className="inter-font text-[#8B8D97] text-[14px]">Completed</h6>
                        <h5 className="text-[#45464E] text-[22px] font-medium">445 </h5>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    )
}

export default Number