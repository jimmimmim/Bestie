import React from 'react';
import data from '../components/Place2.json';
import PlaceInfoCard from '../components/PlaceInfoCard';

export default function Place3() {
    return (
        <div>
            <h1 className='p-3 text-lg font-bold text-left text-blue-600'>인문 &gt; 휴양관광지</h1>
            <div>
                {
                    data.map((d, index) => (
                        <PlaceInfoCard key={index} data={d} />
                    ))
                }
            </div>
        </div>
    );
}