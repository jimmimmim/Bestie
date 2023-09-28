import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RecPlacePage() {
    const location = useLocation();
    const result = location.state.result;

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/", { state: { result: result } });
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <div>
                <span className='mx-1 text-xl font-bold text-blue-500 lg:text-2xl'>{result}</span>
                <span className='text-lg'> 유형에게 추천하는 여행지</span>
            </div>
            <button
                className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'
                onClick={goHome}
            >
                다른 여행지도 확인하기
            </button>
        </div>
    );
}