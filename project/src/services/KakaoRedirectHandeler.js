// 리다이렉트될 화면
// KakaoRedirectHandeler.js

import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirectHandler = () => {
    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code");
        const grant_type = "authorization_code";
        const client_id = `${process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY}`;
        const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'

        axios.post(`https://kauth.kakao.com/oauth/token?
            grant_type=${grant_type}
            &client_id=${client_id}
            &redirect_uri=${REDIRECT_URI}
            &code=${code}`
            , {}, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }).then((res) => {
            console.log(res)
            // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        })
    }, [])

    return <div></div>;
};

export default KakaoRedirectHandler;