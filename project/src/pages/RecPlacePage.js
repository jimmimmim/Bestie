import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import RecPlaceCard from '../components/RecPlaceCard';
import TypeResult from '../components/TypeResult.json';

export default function RecPlacePage() {
    const location = useLocation();
    const result = location.state.result;

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/", { state: { result: typeAnimal[result] } });
    }

    const typeAnimal = {
        'ACE': '사교적인 강아지',
        'ACF': '함께하는 게 좋은 캥거루',
        'BCE': '계획적인 바다사자',
        'BCF': '협력하는 돌고래',
        'ADE': '편한 게 좋은 참새',
        'ADF': '내 사람이 좋은 달마시안',
        'BDE': '때때로 모험하는 고양이',
        'BDF': '독립적인 햄스터'
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-full wrapper'>
            <div className='mt-10'>
                <span className='mx-1 text-xl font-bold text-blue-500 lg:text-2xl'>{typeAnimal[result]}</span>
                <span className='text-lg'> 유형에게 추천하는 여행지</span>
            </div>
            {/* 추천 여행지  */}
            <RecPlaceCard type={result} />
            <button
                className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'
                onClick={goHome}
            >
                다른 여행지도 확인하기
            </button>
        </div>
    );
}