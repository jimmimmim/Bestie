import React from 'react';
import { Link } from 'react-router-dom';

export default function TestMain() {
    return (
        <div className='wrapper flex flex-col w-screen h-screen justify-center'>
            <Link to="/testDetail" className='hover:text-blue-600 hover:font-bold'>
                테스트 시작
            </Link>
        </div>
    );
}