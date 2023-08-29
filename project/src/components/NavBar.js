import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { GoHome, GoSearch, GoBookmark, GoPerson } from "react-icons/go";

const NavBar = () => {
    return (
        <>
            <div id="wrapper" className='grid place-items-center'>
                <div className='max-w-[360px] w-[390px] gnb-box absolute top-[780px] ml-auto bg-white border-2 border-gray-200 z-10'>
                    <ul className='flex items-center justify-around h-[80px] px-10 text-sm font-normal text-[#808080]' id="links">
                        <li className='w-[70px] '>
                            <Link to="/" className='flex flex-col items-center px-3'>
                                <GoHome className='text-[25px]' />
                                홈
                            </Link>
                        </li>
                        <li className='w-[70px] '>
                            <Link to="/mapPage" className='flex flex-col items-center px-3'>
                                <GoSearch className='text-[25px]' />
                                검색
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