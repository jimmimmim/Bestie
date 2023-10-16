import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Home() {

    const location = useLocation();
    const [result, setResult] = useState('');
    const [showPlace, setShowPlace] = useState('hidden');

    const [p1, setP1] = useState('hidden');
    const [p2, setP2] = useState('hidden');
    const [p3, setP3] = useState('hidden');
    const [p4, setP4] = useState('hidden');
    const [p5, setP5] = useState('hidden');
    const [p6, setP6] = useState('hidden');
    const [p7, setP7] = useState('hidden');
    const [p8, setP8] = useState('hidden');
    const [p9, setP9] = useState('hidden');
    const [p10, setP10] = useState('hidden');
    const [p11, setP11] = useState('hidden');

    function hideAll() {
        setP1('hidden');
        setP2('hidden');
        setP3('hidden');
        setP4('hidden');
        setP5('hidden');
        setP6('hidden');
        setP7('hidden');
        setP8('hidden');
        setP9('hidden');
        setP10('hidden');
        setP11('hidden');
    }

    function showAll() {
        setP1('');
        setP2('');
        setP3('');
        setP4('');
        setP5('');
        setP6('');
        setP7('');
        setP8('');
        setP9('');
        setP10('');
        setP11('');
    }

    useEffect(() => {
        if (location.state) {
            setResult(location.state.result);
            setShowPlace('');
            hideAll()
            // showAll()

            switch (result) {
                case '사교적인 강아지':
                    setP1('flex');
                    setP7('flex');
                    break;
                case '함께하는 게 좋은 캥거루':
                    setP1('flex');
                    setP8('flex');
                    break;
                case '계획적인 바다사자':
                    setP2('flex');
                    setP6('flex');
                    break;
                case '협력하는 돌고래':
                    setP3('flex');
                    setP9('flex');
                    break;
                case '편한 게 좋은 참새':
                    setP2('flex');
                    setP3('flex');
                    break;
                case '내 사람이 좋은 달마시안':
                    setP4('flex');
                    setP10('flex');
                    break;
                case '때때로 모험하는 고양이':
                    setP4('flex');
                    setP5('flex');
                    break;
                case '독립적인 햄스터':
                    setP2('flex');
                    setP11('flex');
                    break;
                default:
                    hideAll()
            }
        }
    }, [location.state, result])

    return (
        <div id='wrapper' className='flex flex-col'>
            <div className='flex flex-col w-full p-8 border-2 border-b-0 border-gray-200 mb-14'>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <div className='flex text-6xl text-blue-400 h-[400px] items-center'>
                        Bestie
                    </div>
                    <Link to="/testMain" className='min-w-[200px] w-1/2  text-white ease-in-out lg:text-2xlhover:font-bold'>
                        <div className='flex justify-center py-3 mt-3 bg-blue-400 rounded-full hover:bg-blue-500'>
                            {'친밀도 검사하러 가기'}
                        </div>
                    </Link>
                    <div className={`${showPlace} mt-4 text-gray-400 fadetext text`}>
                        스크롤해서 추천 여행지 보기
                    </div>
                    <div className={`mb-[140px] border border-gray-400 scrollarrow ${showPlace}`}>
                    </div>
                </div>
                <div>
                    <div className={`lg:flex lg:justify-between`}>
                        <div className={`w-full ${showPlace}`}>
                            <div className='flex mb-5'>
                                <span className='font-bold text-blue-500 lg:text-2xl'>{result}</span>
                                <h3 className='px-1 text-left lg:text-2xl'>
                                    유형 메이트와 가기 좋은 장소
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Grid - 6 images */}
                    <div className='grid grid-cols-2 gap-2'>
                        {/* 1 */}
                        <Link to="/place1" className={`${p1} border-2 border-gray-200 bg-gray-200 text-white h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/04/2738504_image2_1.jpg')", backgroundSize: 'cover' }}>
                            인문 &gt; 축제
                        </Link>
                        {/* 2 */}
                        <Link to="/place2" className={`${p2} border-2 border-gray-200 bg-gray-200 text-white h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/95/3014195_image2_1.jpg')", backgroundSize: 'cover' }}>
                            인문 &gt; 공연/행사
                        </Link>
                        {/* 3 */}
                        <Link to="/place3" className={`${p3} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/95/2933695_image2_1.bmp')", backgroundSize: 'cover' }}>
                            인문 &gt; 휴양관광지
                        </Link>
                        {/* 4 */}
                        <Link to="/place4" className={`${p4} border-2 text-white border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/36/2367436_image2_1.jpg')", backgroundSize: 'cover' }}>
                            인문 &gt; 문화시설
                        </Link>
                        {/* 5 */}
                        <Link to="/place5" className={`${p5} border-2 text-white border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/15/1185615_image2_1.jpg')", backgroundSize: 'cover' }}>
                            인문 &gt; 건축/조형물
                        </Link>
                        {/* 6 */}
                        <Link to="/place6" className={`${p6} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/91/2737391_image2_1.jpg')", backgroundSize: 'cover' }}>
                            인문 &gt; 체험관광지
                        </Link>
                        {/* 7 */}
                        <Link to="/place7" className={`${p7} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/69/2786469_image2_1.jpg')", backgroundSize: 'cover' }}>
                            레포츠 &gt; 복합레포츠
                        </Link>
                        {/* 8 */}
                        <Link to="/place8" className={`${p8} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end text-white rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/77/608977_image2_1.jpg')", backgroundSize: 'cover' }}>
                            추천코스 &gt; 캠핑코스
                        </Link>
                        {/* 9 */}
                        <Link to="/place9" className={`${p9} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/43/3016643_image2_1.jpg')", backgroundSize: 'cover' }}>
                            추천코스 &gt; 힐링코스
                        </Link>
                        {/* 10 */}
                        <Link to="/place10" className={`${p10} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end text-white rounded-md p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/04/2684004_image2_1.jpg')", backgroundSize: 'cover' }}>
                            추천코스 &gt; 가족코스
                        </Link>
                        {/* 11 */}
                        <Link to="/place11" className={`${p11} border-2 border-gray-200 bg-gray-200 h-[300px] md:h-44 lg:text-2xl items-end rounded-md text-white p-2`} style={{ backgroundImage: "url('http://tong.visitkorea.or.kr/cms/resource/41/682341_image2_1.jpg')", backgroundSize: 'cover' }}>
                            추천코스 &gt; 나홀로코스
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div >
    );
}

Home.defaultProps = {
    result: '',
}