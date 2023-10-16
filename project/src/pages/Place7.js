import React from 'react';
import data from '../components/Place2.json';
import PlaceInfoCard from '../components/PlaceInfoCard';

export default function Place7() {
    return (
        <div>
            <h1 className='p-3 text-lg font-bold text-left text-blue-600'>레포츠 &gt; 복합레포츠</h1>
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