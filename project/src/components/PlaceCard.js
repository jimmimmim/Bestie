import React from 'react';

export default function PlaceCard() {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center w-full py-5 pl-10'>
                {/* <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                    🚀
                </div> */}
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>밤가시 버거</li>
                    <li className='text-sm text-gray-600'>일산 밤리단길</li>
                    {/* <li>★★★★</li> */}
                </ul>
            </div>
            <p className='px-10 mb-5'>
                주말이라 웨이팅이 있었지만 줄 서서 먹은 게 후회되진 않아요!<br />
                버거 종류도 다양하고 다 직접 만드신다고 해서 더 좋았어요<br />
                고구마 프라이가 맛있고 밀크 셰이크도 맛있었어요<br />
                재방문 의사 있어요🙆‍♀️🙆‍♀️
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                {/* <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                    🚀
                </div> */}
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>C27 다운타운</li>
                    <li className='text-sm text-gray-600'>영종도</li>
                    {/* <li>★★★★</li> */}
                </ul>
            </div>
            <p className='px-10 mb-5'>
                오션뷰가 예쁜 카페지만, 서해라서 해가 지는 게 더 예뻐요~ <br />
                C27 시그니처 커피도 괜찮고 케이크도 무난하게 맛있어요
                층마다 컨셉을 다르게 인테리어를 하신 게 재밌어서 사진 많이 찍었네요 ㅎㅎ<br />
                가격은 조금 비싸지만 위치가 좋아서 나중에 간다면 감안하고 방문할 것 같아요 ㅎㅎ
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                {/* <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                    🚀
                </div> */}
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>속초아이 대관람차</li>
                    <li className='text-sm text-gray-600'></li>
                    {/* <li>★★★★</li> */}
                </ul>
            </div>
            <p className='px-10 mb-5'>
                대기가 너무 길어요…<br />
                비싸고 대기가 길어서 한여름에는 더 더워서 힘들 것 같네요<br />
                날씨가 좋으면 위에서 사진 찍으면서 풍경보기는 좋아요!<br />
                한번쯤 추억으로만 가 볼 만해요..
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                {/* <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                    🚀
                </div> */}
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>해촌</li>
                    <li className='text-sm text-gray-600'>양양</li>
                    {/* <li>★★★★</li> */}
                </ul>
            </div>
            <p className='px-10 mb-5'>
                섭국 맛집으로 유명해서 방문해봤어요~ ㅎㅎ<br />
                자연산 홍합으로 만든다고 하던데 정말 맛있더라고요~~<br />
                아침부터 영업하셔서 새벽에 가족끼리 차 타고 넘어가서 방문하기에 좋아요~~^^<br />
                조~금만 더 가격대가 착하면 좋겠는데.. 제 욕심이겠죠?^^;;<br />
                그래도 다음에 또 갈 것 같아요~ ^^
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div className='flex items-center w-full py-5 pl-10'>
                {/* <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-gray-200 text-4xl'>
                    🚀
                </div> */}
                <ul className='flex items-center'>
                    <li className='mr-2 text-xl font-bold'>스게</li>
                    <li className='text-sm text-gray-600'>부산 해운대</li>
                    {/* <li>★★★★</li> */}
                </ul>
            </div>
            <p className='px-10 mb-5'>
                하이볼 맛집 이자카야로 유명해서 방문했어요<br />
                레몬 하이볼은 딱 인스타 업로드 각! 근데 맛도 있고 딸기 하이볼도 맛있었어요~!!!<br />
                나베도 맛있었는데 양은 좀.. ㅎ 가성비가 조금 떨어지는 느낌이었어요 그래두 나중에 부산 가면 또 가고 싶어요!
            </p>
            <span className='mx-10 border border-gray-200'></span>
            <div id='placeholder' className='h-20 mb-4'></div>
        </div>
    );
}