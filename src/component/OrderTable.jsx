import React from "react";
import data from "./data.json";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { TbLocationShare } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const CustomOrderTable = () => {

    const [customername, setcustomername] = useState("");
    return (
        <div className="bg-[#f4f5fa] p-[22px]">
            <div className="flex-col items-start lg:flex-row lg:items-center table-top p-4 my-4 mb-0  flex  justify-between bg-[#FFFFFF] rounded-t-lg ">
                <div className="table-heading">
                    <h6>Customer Orders</h6>
                </div>

                <div className="flex-col items-start lg:flex-row items-center table-btn flex items-center gap-4 ">
                    <div className="search-bar border-2 border-[#53545C] rounded outline-none px-2">
                        <input type="text" placeholder="Customer Name" value={customername} onChange={(e) => {
                            setcustomername(e.target.value)
                        }}/>

                        <button onClick={() => {
                            const cusname = data.filter((cname) => 
                                cname.name.toLowerCase.includes(customername.toLowerCase())
                            )
                        }}><HiMagnifyingGlass /></button>
                    </div>

                    <div className="filter">
                        <button className="flex items-center gap-2 border-2 border-[#53545C] px-2 rounded"><FiFilter />Filter</button>
                    </div>

                    <div className="filter">
                        <button className="flex items-center gap-2 border-2 border-[#53545C] px-2 rounded"><MdOutlineDateRange /> Date</button>
                    </div>

                    <div className="filter">
                        <button className="flex items-center gap-2 border-2 border-[#53545C] px-2 rounded"><TbLocationShare />Share</button>
                    </div>

                    <div className="filter">
                        <button className="flex items-center gap-2 border-2 border-[#53545C] px-2 rounded">Bulk Action</button>
                    </div>
                </div>

            </div>
            <hr />

            <div className="table-data p-2 overflow-x-auto bg-[#FFFFFF] rounded-b-lg">
                <table className="w-[300%] lg:w-full">
                    <thead>
                        <tr >
                            <th className="px-4"> <input type="checkbox" /></th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Customer Name  </th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Order Date</th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Order Type </th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Tracking ID  </th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Order Total  </th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left ">Action  </th>
                            <th className="inter-font text-[14px] font-normal px-2 py-4 text-left">Status  </th>

                        </tr>

                    </thead>
                    <hr />

                    <tbody>

                        {data.map((data, i) => (
                            <tr>
                                <td className="px-4"> <input type="checkbox" /></td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079]">{data.name} </td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079]">{data.orderdate}</td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079]">{data.ordertype}</td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079]">{data.TrackingId}</td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079]">{data.OrderTotal}  </td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079] "> <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                                    <option value="" selected >This week</option>
                                    <option value="">This Month</option>
                                    <option value="">This Year</option>
                                </select>  </td>
                                <td className="inter-font text-[14px] font-normal px-2 py-4 text-left  text-[#6E7079] "> <span className="p-2 bg-[#32936F29] text-[#519C66] rounded">{data.Status}</span>  </td>
                            </tr>

                        ))}


                        <hr />
                        <tr>
                            <td colSpan={4} className="text-left px-2 py-4">
                                <div className="flex gap-4 items-center">
                                <select name="" id="" className="inter-font text-[#BEC0CA] bg-[#5E636614] text-[12px] outline-none">
                                    <option value="" selected >10</option>
                                    <option value="">20</option>
                                    <option value="">30</option>
                                </select>

                                <span className="inter-font text-[#A6A8B1] font-medium text-[14px]">Items per page</span>
                                <span className="text-[#666666] inter-font font-medium text-[14px]">1-100 of 200 items</span>
                                </div>
                                
                            </td>

                            <td colSpan={4} className="text-left px-2 py-4">
                                <div className="flex gap-4 items-center justify-end">
                                <select name="" id="" className="inter-font text-[#BEC0CA] bg-[#5E636614] text-[12px] outline-none">
                                    <option value="" selected >1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select><span className="inter-font text-[#A6A8B1] font-medium text-[14px]">of 44 pages</span>

                                <span className="inter-font text-[#A6A8B1] font-medium text-[14px]"><IoIosArrowBack /></span>
                                <span className="text-[#666666] inter-font font-medium text-[14px]"><IoIosArrowForward /></span>
                                </div>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

 
    )
}

export default CustomOrderTable