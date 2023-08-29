import React, { useEffect } from "react";

const { kakao } = window;

function Map() {

    useEffect(() => {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])


    return (
        <div id="map" className="w-[360px] h-[780px]"></div>
    )
}

export default Map;