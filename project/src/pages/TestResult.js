import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function TestResult() {
    const location = useLocation();
    const result = location.state.result;

    const navigate = useNavigate();
    const showRecommend = () => {
        navigate("/recommendPlace", { state: { result: result } });
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <div>
                테스트 결과
            </div>
            <div>
                {`당신이 고른 답은 ${result} 입니다.`}
            </div>
            <button
                className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'
                onClick={showRecommend}
            >
                추천 여행지 보기
            </button>
            <Link to="/testDetail" className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'>
                다시하기
            </Link>
        </div>
    );
}