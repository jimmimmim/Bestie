import React from 'react';
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
    return (
        <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-full py-2 bg-white'>
            <div className='flex justify-between w-full px-6 py-2 mx-3 bg-gray-200 rounded-full cursor-pointer'>
                <h1 className='text-base text-[#A7A7A7]'>검색어를 입력해 주세요</h1>
                <GoSearch className='text-[22px] text-[#A7A7A7]' />
            </div>
        </div>
    )
};

export default SearchBar;