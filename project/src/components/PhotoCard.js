import React from 'react';

export default function PhotoCard({ photo }) {

    console.log(photo);

    return (
        <div className='flex flex-col border-2 border-gray-300 w-screen h-full p-2 mx-3 my-2 text-left'>
            <div>
                {/* header */}
                <div className='flex items-center'>
                    <h2 className='text-lg font-bold mr-2'>{photo.galTitle}</h2>
                    <p className='text-sm'>{photo.galPhotographyLocation}</p>
                </div>
                {/* body */}
                <div className='pb-2'>
                    <img
                        src={photo.galWebImageUrl}
                        alt={photo.galTitle}
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className='text-sm bg-blue-100 w-max px-1'>{photo.galSearchKeyword}</div>
            </div>
        </div>
    );
}

PhotoCard.defaultProps = {
    galContentId: "1047780",
    galContentTypeId: "17",
    galTitle: "트로피칼드림",
    galWebImageUrl: "http://tong.visitkorea.or.kr/cms2/website/80/1047780.jpg",
    galCreatedtime: "20100622161743",
    galModifiedtime: "20150825161227",
    galPhotographyMonth: "201005",
    galPhotographyLocation: "경상남도 거제시",
    galPhotographer: "한국관광공사 박성근",
    galSearchKeyword: "트로피칼 드림, 펜션형 리조트"
}