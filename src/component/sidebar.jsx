import React from "react";
import logo from "../images/metrix-logo.png";
import { RxDashboard } from "react-icons/rx";
import { IoBagOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import Order from "./Orders";


const Sidebar = () => {
    return (
        <>

        <div className="hidden lg:block sidebar w-2/12 sticky top-0 h-screen" >
                <div className="toggler item px-6 py-4 pb-10">
                    <a to=""><img src={logo} className="w-32" /></a>

                </div>

                <div className="sidebar-menu ">
                    <ul>
                        <li className="flex items-center primary-bg-color gap-4 text-white p-4 mx-6 rounded-xl text-[14px] "><RxDashboard className="text-[18px]" /><Link to="/"> Dashboard</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[14px] text-[#53545C]"><IoBagOutline className="text-[24px]" /><Link to="/order">Orders</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[14px] text-[#53545C]"><FaUserAlt className="text-[24px]" /><Link to="">Customers</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[14px] text-[#53545C]"><CiFolderOn className="text-[24px]" /><Link to="">Inventory</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[14px] text-[#53545C]"><IoChatbubbleEllipsesOutline className="text-[24px]" /><Link to="">Conversations</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[14px] text-[#53545C]"><IoSettingsOutline className="text-[24px]" /><Link to="">Settings</Link></li>
                    </ul>


                </div>

                <div className="b-menu absolute top-[34rem]">
                    <ul>
                        <li className="flex items-center gap-4 p-4 mx-6 bg-[#5E63661A] mb-4 rounded-xl text-[12px]"><MdOutlineHeadphones className="text-[24px]" /><Link to="">Contact Support</Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 bg-[#FFCC9133] rounded-xl text-[12px]"><IoGiftOutline className="text-[24px]" /><Link to="">Free Gift Awaits You! <br /> <span className="text-[10px]">Upgrade your Account </span> </Link></li>
                        <li className="flex items-center gap-4 p-4 mx-6 rounded-xl text-[12px]"><IoLogOutSharp className="text-[24px] text-[#CC5F5F]" /><Link to="" className="text-[#CC5F5F]">Logout</Link></li>
                    </ul>
                </div>
            </div>

            <div className="block lg:hidden sidebar w-2/12 sticky top-0 h-screen" >
                <div className="toggler item px-6 py-4 pb-10">
                    <Link to=""><img src={logo} className="w-32" /></Link>

                </div>

                <div className="sidebar-menu ">
                    <ul>
                        <li className="flex items-center primary-bg-color gap-4 text-white p-2 mx-4 rounded-xl text-[14px] "><a to=""><RxDashboard className="text-[18px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[14px] text-[#53545C]"><a to=""><IoBagOutline className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[14px] text-[#53545C]"><a to=""><FaUserAlt className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[14px] text-[#53545C]"><a to=""><CiFolderOn className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[14px] text-[#53545C]"><a to=""><IoChatbubbleEllipsesOutline className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[14px] text-[#53545C]"><a to=""><IoSettingsOutline className="text-[24px]" /></a></li>
                    </ul>


                </div>

                <div className="b-menu absolute top-[34rem]">
                    <ul>
                        <li className="flex items-center gap-4 py-4 mx-4 bg-[#5E63661A] mb-4 rounded-xl text-[12px]"><a to=""><MdOutlineHeadphones className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 bg-[#FFCC9133] rounded-xl text-[12px]"><a to=""><IoGiftOutline className="text-[24px]" /></a></li>
                        <li className="flex items-center gap-4 py-4 mx-4 rounded-xl text-[12px]"><a to="" className="text-[#CC5F5F]"><IoLogOutSharp className="text-[24px] text-[#CC5F5F]" /></a></li>
                    </ul>
                </div>
            </div>

            
        
            

        </>


    )
}

export default Sidebar