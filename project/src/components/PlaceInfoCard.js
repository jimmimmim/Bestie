import React from 'react';

export default function PlaceInfoCard({ data }) {

    return (
        <div className='flex flex-col h-full p-2 mx-3 my-2 text-left border-2 border-gray-300'>
            <div>
                {/* header */}
                <div className='flex items-center'>
                    <h2 className='mr-2 text-lg font-bold'>{data.title}</h2>
                </div>
                <p className='text-sm text-blue-600'>{data.location}</p>
            </div>
            <div>
                {/* body */}
                <div className='px-1 text-sm'>{data.info}</div>
            </div>
        </div>
    );
}