import React from 'react';

export default function Home() {
    return (
        <div id='wrapper' className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center max-w-[360px] w-[390px] border-2 border-gray-200 border-b-0 h-[780px] px-8'>
                <h3 className='px-1 text-left'>
                    지금 뜨는 여행지🚌 (인기여행지)
                </h3>
                <div className='flex border-2 border-gray-200 bg-gray-200 h-[145px] justify-center items-center my-4 rounded-md'>img</div>
                <h3 className='px-1 text-left'>
                    **유형 메이트와 가기 좋은 장소 추천😘
                </h3>
                <div className='flex border-2 border-gray-200 bg-gray-200 h-[145px] justify-center items-center mt-4 mb-8 rounded-md'>img</div>
                {/* Grid - 6 images */}
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>식당</div>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>카페·브런치</div>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>자연·관광</div>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>액티비티</div>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>바(bar)</div>
                    <div className='flex border-2 border-gray-200 bg-gray-200 h-[90px] items-end rounded-md p-2'>숙소</div>
                </div>
                <div className='mt-3 text-right'>
                    {'친밀도 검사 하러 가기 >>'}
                </div>
            </div>
        </div>
    );
}