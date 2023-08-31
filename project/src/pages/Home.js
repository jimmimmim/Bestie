import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <div id='wrapper' className='flex flex-col'>
            <div className='flex flex-col w-full p-8 border-2 border-b-0 border-gray-200 mb-14'>
                <h3 className='px-1 text-left'>
                    지금 뜨는 여행지🚌 (인기여행지)
                </h3>
                <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[145px] md:h-80 justify-center items-center my-4 rounded-md'>
                    API 미리보기 (페이지 이동)
                </Link>
                <h3 className='px-1 text-left'>
                    **유형 메이트와 가기 좋은 장소 추천😘
                </h3>
                <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[145px] md:h-80 justify-center items-center my-4 rounded-md'>
                    API 미리보기 (페이지 이동)
                </Link>
                {/* Grid - 6 images */}
                <div className='grid grid-cols-2 gap-2'>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        식당
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        카페·브런치
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        자연·관광
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        액티비티
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        바(bar)
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 items-end rounded-md p-2'>
                        숙소
                    </Link>
                </div>
                <div className='mt-3 text-right'>
                    {'친밀도 검사 하러 가기 >>'}
                </div>
            </div>
            <Outlet />
        </div>
    );
}