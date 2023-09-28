import React from 'react';
import { GoHeart, GoBookmark, GoPencil, GoUnmute, GoCommentDiscussion } from "react-icons/go";


export default function Profile() {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY;
    const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <div id='wrapper' className='flex'>
            <div className='flex flex-col items-start w-full border-2 border-b-0 border-gray-200'>
                {/* Profile */}
                <div className='flex mx-10 my-14'>
                    <div className='w-[88px] h-[88px] flex justify-center items-center mr-6 bg-blue-200 rounded-full text-4xl'>
                        😊
                    </div>
                    <a href={KAKAO_AUTH_URL} className='flex items-center text-lg underline ease-in-out underline-offset-4 hover:text-blue-600'>
                        로그인을 해주세요.
                    </a>
                </div>
                {/* 기타 항목 */}
                <div className='flex flex-col w-full text-lg text-left text-[#626262]'>
                    <div className='flex items-center w-full py-3 pl-10'>
                        <GoHeart className='text-[20px] mx-2' />
                        저장목록
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                    <div className='flex items-center w-full py-3 pl-10'>
                        <GoBookmark className='text-[20px] mx-2' />
                        최근 본 장소
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                    <div className='flex items-center w-full py-3 pl-10'>
                        <GoPencil className='text-[20px] mx-2' />
                        <a href='/myPosts'>내가 남긴 글</a>
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                    <div className='flex items-center w-full py-3 pl-10'>
                        <GoUnmute className='text-[20px] mx-2' />
                        <a href='/notice'>공지사항</a>
                    </div>
                    <span className='mx-10 border border-gray-200'></span>
                    <div className='flex items-center w-full py-3 pl-10'>
                        <GoCommentDiscussion className='text-[20px] mx-2' />
                        문의
                    </div>
                </div>
            </div>
        </div>
    );
}