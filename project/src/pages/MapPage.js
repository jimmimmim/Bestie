import React from 'react';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';


export default function MapPage() {
    return (
        <div id='wrapper' className='flex w-full h-full'>
            <div className=''>
                <SearchBar />
                <Map />
            </div>
        </div>

    );
}