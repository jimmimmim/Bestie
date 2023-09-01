import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const buttonTop = () => {
    alert('1번 답 클릭');
}

const buttonBottom = () => {
    alert('2번 답 클릭');
}

export default function TestDetail() {
    return (
        <div className='wrapper flex flex-col w-screen h-screen justify-center'>
            <div className='mb-20'>
                질문 1
            </div>
            <div className='flex flex-col items-center'>
                <button
                    className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200'
                    onClick={buttonTop}
                >
                    1번 답
                </button>
                <button
                    className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200'
                    onClick={buttonBottom}
                >
                    2번 답
                </button>
            </div>
        </div>
    );
}