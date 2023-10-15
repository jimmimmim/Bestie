import React from 'react';
import data from '../components/Place2.json';
import PlaceInfoCard from '../components/PlaceInfoCard';

export default function NoPage() {
    return (
        <div>
            <h1 className='p-3 text-lg font-bold text-left text-blue-600'>인문 &gt; 공연/행사</h1>
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