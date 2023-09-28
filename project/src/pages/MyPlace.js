import React from 'react';
import PlaceCard from '../components/PlaceCard';

export default function MyPlace() {
    return (
        <div id='wrapper' className='flex'>
            <div className='flex flex-col items-start w-full border-2 border-gray-200 border-b-0 h-[780px]'>
                <div className='flex w-full py-3 pl-8 border-b-2 border-gray-200'>
                    <h1 className='text-[20px] font-bold'>내 장소</h1>
                </div>
                <div className='flex flex-col w-full text-lg text-left'>
                    <PlaceCard />
                </div>
            </div>
        </div>
    );
}