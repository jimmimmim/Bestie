import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Home() {

    const location = useLocation();
    const [result, setResult] = useState('');

    useEffect(() => {
        if (location.state) {
            setResult(location.state.result);
        }
    }, [location.state])

    return (
        <div id='wrapper' className='flex flex-col'>
            <div className='flex flex-col w-full p-8 border-2 border-b-0 border-gray-200 mb-14'>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <div className='flex text-6xl text-blue-400 h-[400px] items-center'>
                        Bestie
                    </div>
                    <Link to="/testMain" className='   min-w-[200px] w-1/2  text-white ease-in-out lg:text-2xlhover:font-bold'>
                        <div className='flex justify-center py-3 mt-3 bg-blue-400 rounded-full hover:bg-blue-500'>
                            {'친밀도 검사하러 가기'}
                        </div>
                    </Link>
                    <div className='mt-3 text-gray-500 fadetext text'>
                        스크롤해서 추천 여행지 보기
                    </div>
                    <div className='mb-[140px] border border-black scrollarrow'>
                    </div>
                </div>
                <div className='lg:flex lg:justify-between'>
                    <div className='w-full lg:mr-3'>
                        <h3 className='px-1 text-left lg:text-2xl'>
                            지금 뜨는 여행지
                        </h3>
                        <Link to="/detailPetAPI" className='flex border-2 border-gray-200 bg-gray-200 h-[145px] md:h-80 lg:h-[600px] justify-center items-center my-4 rounded-md'>
                            detailPetAPI 미리보기 - 국문관광정보/반려동물
                        </Link>
                    </div>
                    <div className='w-full'>
                        <div className='flex'>
                            <span className='font-bold text-blue-500 lg:text-2xl'>{result}</span>
                            <h3 className='px-1 text-left lg:text-2xl'>
                                유형 메이트와 가기 좋은 장소
                            </h3>
                        </div>
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
            </div>
            <Outlet />
        </div>
    );
}

Home.defaultProps = {
    result: '',
}