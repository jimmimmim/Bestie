import React, { useEffect } from "react";

const { kakao } = window;

function Map() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.8331896597, 129.2771371628), // center
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        // marker position
        const markerPosition = new kakao.maps.LatLng(35.8331896597, 129.2771371628);

        // create marker
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // display marker
        marker.setMap(map);

        // info window message
        let msg = '경주 아드리아 펜션';

        // info window content
        const iwContent = `<div style="padding:5px;">${msg}</div>`;

        // info window
        const infowindow = new kakao.maps.InfoWindow({
            content: iwContent
        });

        // marker mouseover
        kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
        });

        // marker mouseout
        kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });

    }, [])

    return (
        <div id="map" className="w-screen h-screen"></div>
    )
}

export default Map;