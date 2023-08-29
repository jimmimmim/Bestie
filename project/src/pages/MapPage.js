import React from 'react';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';


export default function MapPage() {
    return (
        <div id='wrapper' className='flex justify-center'>
            <div className='max-w-[360px] w-[390px] border-black'>
                <SearchBar />
                <Map />
            </div>
        </div>

    );
}