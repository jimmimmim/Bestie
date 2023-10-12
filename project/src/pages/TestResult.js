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

    const typeAnimal = {
        'ACE': '사교적인 강아지',
        'ACF': '함께하는 게 좋은 캥거루',
        'BCE': '계획적인 바다사자',
        'BCF': '협력하는 돌고래',
        'ADE': '편한 게 좋은 참새',
        'ADF': '내 사람이 좋은 달마시안',
        'BDE': '때때로 모험하는 고양이',
        'BDF': '독립적인 햄스터'
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
    // const showRecommend = () => {
    //     navigate("/recommendPlace", { state: { result: typeAnimal[result] } });
    // }
    const showRecommend = () => {
        navigate("/recommendPlace", { state: { result: result } });
    }

    // console.log(TypeResult[typeDict[result]]);

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen wrapper'>
            <div className='mb-10 text-2xl font-bold'>
                테스트 결과
            </div>
            <div className='p-3 m-3 text-left'>
                <div className='my-2 text-xl font-bold lg:text-2xl'>
                    <span>당신의 여행 유형은 </span>
                    <span className='mx-1 text-blue-500'>{typeAnimal[result]}</span>
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