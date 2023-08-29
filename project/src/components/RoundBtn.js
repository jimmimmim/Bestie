import React from 'react';

export default function RoundBtn({ name }) {
    return (
        <button className='roundbtn flex justify-center rounded-full mx-10 h-[60px] items-center shadow-md bg-gray-300 my-2'>
            {name}
        </button>
    )
};