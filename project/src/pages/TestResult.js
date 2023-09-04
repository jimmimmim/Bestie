import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import TypeResult from '../components/TypeResult.json';

export default function TestResult() {
    const location = useLocation();
    const [result, setResult] = useState(location.state.result);

    const typeDict = {
        'ACE': 0, 'ACF': 1, 'BCE': 2, 'BCF': 3,
        'ADE': 4, 'ADF': 5, 'BDE': 6, 'BDF': 7
    }

    useEffect(() => {
        let alphabetCnt = {}
        let typeResult = ''
        for (let type of ['a', 'c', 'e']) {
            let cnt = 0;
            let idx = result.indexOf(type);
            while (idx !== -1) {
                cnt++;
                idx = result.indexOf(type, idx + 1);
            }
            alphabetCnt[type] = cnt
        }

        if (alphabetCnt['a'] >= 3) typeResult += 'A'
        else typeResult += 'B'
        if (alphabetCnt['c'] >= 2) typeResult += 'C'
        else typeResult += 'D'
        if (alphabetCnt['e'] >= 2) typeResult += 'E'
        else typeResult += 'F'

        // console.log(result);
        // console.log(alphabetCnt);
        // console.log(typeResult);
        setResult(typeResult);
    }, [])

    const navigate = useNavigate();
    const showRecommend = () => {
        navigate("/recommendPlace", { state: { result: result } });
    }

    // console.log(TypeResult[typeDict[result]]);

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <div>
                테스트 결과
            </div>
            <div className='p-3 m-3'>
                <div className='font-bold text-xl lg:text-2xl my-2'>
                    <span>당신이 고른 답은 </span>
                    <span className='text-blue-500 mx-1'>{result}</span>
                    <span>입니다.</span>
                </div>
                <div className='py-2'>
                    {
                        TypeResult[typeDict[result]] &&
                        TypeResult[typeDict[result]].header
                    }
                </div>
                <div>
                    {
                        TypeResult[typeDict[result]] &&
                        TypeResult[typeDict[result]].p1
                    }
                    <br />
                    {
                        TypeResult[typeDict[result]] &&
                        TypeResult[typeDict[result]].p2
                    }
                </div>
            </div>
            <button
                className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'
                onClick={showRecommend}
            >
                추천 여행지 보기
            </button>
            <Link to="/testDetail" className='border border-blue-600 my-2 py-3 w-[70%] rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:font-bold'>
                다시하기
            </Link>
        </div>
    );
}