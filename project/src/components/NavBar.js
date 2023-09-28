import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { GoHome, GoSearch, GoBookmark, GoPerson } from "react-icons/go";

const NavBar = () => {
    return (
        <>
            <div id="wrapper" className='grid place-items-center'>
                <div className='gnb-box ml-auto bg-white border-2 border-b-0 border-gray-200 fixed left-0 bottom-0 w-full h-[80px] z-[1000]'>
                    <ul className='flex items-center justify-around w-full h-[80px] px-10 text-sm font-normal text-[#808080]' id="links">
                        <li className=''>
                            <Link to="/" className='flex flex-col items-center px-5'>
                                <GoHome className='text-[25px]' />
                                홈
                            </Link>
                        </li>
                        <li className=''>
                            <Link to="/mapPage" className='flex flex-col items-center px-4'>
                                <GoSearch className='text-[25px]' />
                                관광지도
                            </Link>
                        </li>
                        <li className=''>
                            <Link to="/myPlace" className='flex flex-col items-center px-3'>
                                <GoBookmark className='text-[25px]' />
                                내 장소
                            </Link>
                        </li>
                        <li className=''>
                            <Link to="/profile" className='flex flex-col items-center px-3'>
                                <GoPerson className='text-[25px]' />
                                프로필
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default NavBar;