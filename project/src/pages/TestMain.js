import React from 'react';
import { Link } from 'react-router-dom';

export default function TestMain() {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <Link to="/testDetail" className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'>
                테스트 시작
            </Link>
        </div>
    );
}