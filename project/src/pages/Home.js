import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <div id='wrapper' className='flex flex-col'>
            <div className='flex flex-col w-full p-8 border-2 border-b-0 border-gray-200 mb-14'>
                <div className='lg:flex lg:justify-between'>
                    <div className='w-full lg:mr-3'>
                        <h3 className='px-1 text-left lg:text-2xl'>
                            지금 뜨는 여행지🚌 (인기여행지)
                        </h3>
                        <Link to="/detailPetAPI" className='flex border-2 border-gray-200 bg-gray-200 h-[145px] md:h-80 lg:h-[600px] justify-center items-center my-4 rounded-md'>
                            detailPetAPI 미리보기 - 국문관광정보/반려동물
                        </Link>
                    </div>
                    <div className='w-full'>
                        <h3 className='px-1 text-left lg:text-2xl'>
                            **유형 메이트와 가기 좋은 장소 추천😘
                        </h3>
                        <Link to="/photoAPI" className='flex border-2 border-gray-200 bg-gray-200 h-[145px] md:h-80 lg:h-[600px] justify-center items-center my-4 rounded-md'>
                            photoAPI 미리보기 - 관광갤러리
                        </Link>
                    </div>
                </div>
                {/* Grid - 6 images */}
                <div className='grid grid-cols-2 gap-2'>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        식당
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        카페·브런치
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        자연·관광
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        액티비티
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        바(bar)
                    </Link>
                    <Link to="/apitest" className='flex border-2 border-gray-200 bg-gray-200 h-[90px] md:h-44 lg:text-2xl items-end rounded-md p-2'>
                        숙소
                    </Link>
                </div>
                <div className='mt-3 text-right'>
                    <Link to="/testMain" className='lg:text-2xl hover:text-blue-600 hover:font-bold ease-in-out'>
                        {'친밀도 검사 하러 가기 >>'}
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}