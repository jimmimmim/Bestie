import React from 'react';

export default function MyPlace() {
    return (
        <div id='wrapper' className='flex'>
            <div className='flex flex-col items-start w-full border-2 border-gray-200 border-b-0 h-[780px]'>
                <div className='flex w-full py-3 pl-8 border-gray-200 border-b-2'>
                    <h1 className='text-[20px] font-bold'>내 장소</h1>
                </div>

                <div className='flex flex-col w-full text-lg text-left'>
                    <div className='flex items-center w-full py-5 pl-10'>
                        <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                            🚀
                        </div>
                        <ul>
                            <li>여행지 이름</li>
                            <li>주소</li>
                            <li>별점</li>
                        </ul>
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                    <div className='flex items-center w-full py-5 pl-10'>
                        <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                            🚀
                        </div>
                        <ul>
                            <li>여행지 이름</li>
                            <li>주소</li>
                            <li>별점</li>
                        </ul>
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                </div>
            </div>
        </div>
    );
}