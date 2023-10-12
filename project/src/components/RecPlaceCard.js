import React, { useEffect, useState } from 'react';

import RecPlaceList from '../components/RecPlaceList.json';

export default function RecPlaceCard({ type }) {

    // ex) ACE
    console.log(type);

    // const [result, setResult] = useState();

    const typeDict = {
        'ACE': 0, 'ACF': 1, 'BCE': 2, 'BCF': 3,
        'ADE': 4, 'ADF': 5, 'BDE': 6, 'BDF': 7
    }

    // useEffect(() => {
    //     setResult(RecPlaceList[typeDict[type]]);
    // }, [])

    console.log(RecPlaceList[typeDict[type]]);

    return (
        <div className='flex flex-col border-2 border-gray-300 w-[70%] h-[430px] overflow-auto p-2 mx-3 my-2 text-left'>
            <div>
                {/* header */}
                <div className='flex items-center'>
                    <h2 className='mr-2 text-lg font-bold'> </h2>
                    <p className='text-sm'></p>
                </div>
                {/* body */}
                <div className='pb-2'>
                    {RecPlaceList[typeDict[type]].p1}
                    <img
                        src={RecPlaceList[typeDict[type]].img1}
                        alt='image1'
                        referrerPolicy="no-referrer"
                        className='w-full'
                    />
                </div>
                <div className='pb-2'>
                    {RecPlaceList[typeDict[type]].p2}
                    <img
                        src={RecPlaceList[typeDict[type]].img2}
                        alt='image2'
                        referrerPolicy="no-referrer"
                        className='w-full'
                    />
                </div>
                <div className='pb-2'>
                    {RecPlaceList[typeDict[type]].p3}
                    <img
                        src={RecPlaceList[typeDict[type]].img3}
                        alt='image3'
                        referrerPolicy="no-referrer"
                        className='w-full'
                    />
                </div>
                {/* 카테고리명 */}
                <div className='flex'>
                    <div className='px-1 mr-2 text-sm bg-blue-100 w-max'>{'레포츠'}</div>
                    <div className='px-1 text-sm bg-blue-100 w-max'>{'축제'}</div>
                </div>
            </div>
        </div>
    );
}