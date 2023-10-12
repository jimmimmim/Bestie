import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question.json';

export default function TestDetail() {

    const [current, setCurrent] = useState(1);
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    const TOTAL = 11;

    const buttonTop = () => {
        if (current < TOTAL) setCurrent(current + 1);
        setResult(result + Question[current - 1].answers[0].type);
        // console.log(Question[current - 1].answers[0].type);
    }

    const buttonBottom = () => {
        if (current < TOTAL) setCurrent(current + 1);
        setResult(result + Question[current - 1].answers[1].type);
        // console.log(Question[current - 1].answers[1].type);
    }

    // *** Show Result Page - Types *** //
    useEffect(() => {
        if (result.length === TOTAL) showResult();
    })

    const showResult = () => {
        navigate("/testResult", { state: { result: result } });
    }

    return (
        <div className='flex flex-col w-screen h-screen wrapper'>
            {/* header - Questions */}
            <div className='px-10 mt-20'>
                <div className='mb-10 text-3xl font-bold text-left text-blue-600'>
                    {`# ${current}`}
                </div>
                <div className='mb-20 text-2xl font-bold text-[#616161]'>
                    {Question[current - 1].question}
                </div>
            </div>
            {/* body - Answers */}
            <div className='flex flex-col items-center'>
                <button
                    className='bg-[#F1F5FE] my-2 py-10 w-[70%] rounded-lg text-sm hover:bg-blue-200 px-2'
                    onClick={buttonTop}
                >
                    {Question[current - 1].answers[0].answer}
                </button>
                <button
                    className='bg-[#F1F5FE] my-2 py-10 w-[70%] rounded-lg text-sm hover:bg-blue-200 px-2'
                    onClick={buttonBottom}
                >
                    {Question[current - 1].answers[1].answer}
                </button>
            </div>
        </div >
    );
}