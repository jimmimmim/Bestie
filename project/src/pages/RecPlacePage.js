import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function RecPlacePage() {
    const location = useLocation();
    const result = location.state.result;

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <div>
                추천 여행지
            </div>
            <div>
                {`${result}에게 추천하는 여행지`}
            </div>
            <Link to="/" className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'>
                다른 여행지도 확인하기
            </Link>
        </div>
    );
}