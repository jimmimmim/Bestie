import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = [
    {
        "qid": 1,
        "question": "있잖아 너와 매일 밤하늘을 보고 싶어",
        "answers": [
            {
                "answer": "이렇게 반짝이는 별을 보며 함께 잠들고 싶어",
                "type": "a"
            },
            {
                "answer": "그날 있었던 시덥지 않은 일상들",
                "type": "b"
            }
        ]
    },
    {
        "qid": 2,
        "question": "가을밤 고요한 밤 잠 안 오는 밤",
        "answers": [
            {
                "answer": "기러기 우는 소리 높고 낮을 때",
                "type": "a"
            },
            {
                "answer": "엄마품이 그리워 눈물 나오면",
                "type": "b"
            }
        ]
    },
    {
        "qid": 3,
        "question": "제비꽃 동백꽃 수선화 매화",
        "answers": [
            {
                "answer": "산딸기 산버찌 산더덕 산뽕",
                "type": "a"
            },
            {
                "answer": "정성을 다해 준비했어요",
                "type": "b"
            }
        ]
    },
]

export default function TestDetail() {

    const [current, setCurrent] = useState(1);
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    const TOTAL = 3;

    const buttonTop = () => {
        if (current < TOTAL) setCurrent(current + 1);
        setResult(result + Question[current - 1].answers[0].type);
    }

    const buttonBottom = () => {
        if (current < TOTAL) setCurrent(current + 1);
        setResult(result + Question[current - 1].answers[1].type);
    }

    // *** Show Result Page - Types ***
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