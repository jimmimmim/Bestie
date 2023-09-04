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
        <div className='flex flex-col justify-center w-screen h-screen wrapper'>
            {/* header - Questions */}
            <div className='mb-20'>
                <div>
                    {`질문 ${current}`}
                </div>
                <div>
                    {Question[current - 1].question}
                </div>
            </div>
            {/* body - Answers */}
            <div className='flex flex-col items-center'>
                <button
                    className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg text-sm hover:bg-blue-200'
                    onClick={buttonTop}
                >
                    {Question[current - 1].answers[0].answer}
                </button>
                <button
                    className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg text-sm hover:bg-blue-200'
                    onClick={buttonBottom}
                >
                    {Question[current - 1].answers[1].answer}
                </button>
            </div>
        </div >
    );
}