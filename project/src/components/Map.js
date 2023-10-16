import React, { useEffect } from "react";

import MarkerData from '../components/MarkerData.json';
const { kakao } = window;

function Map() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // center
            level: 11
        };
        const map = new kakao.maps.Map(container, options);

        for (let i = 0; i < MarkerData.length; i++) {
            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(MarkerData[i].lat, MarkerData[i].lng) // 마커의 위치
            });

            // 인포윈도우에 표시할 내용
            const iwContent = '<div style="padding:5px;">' + MarkerData[i].title + '</div>'

            // 마커에 표시할 인포윈도우를 생성합니다 
            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:5px;">${MarkerData[i].title}</div>` + `<div>${MarkerData[i].location}</div>`,
                removable: true
            });

            // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
            // 이벤트 리스너로는 클로저를 만들어 등록합니다 
            // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
            // kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
            kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));

        }

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
        function makeOverListener(map, marker, infowindow) {
            return function () {
                infowindow.open(map, marker);
            };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function () {
                infowindow.close();
            };
        }

    }, [])

    return (
        <div id="map" className="w-screen h-screen"></div>
    )
}

export default Map;