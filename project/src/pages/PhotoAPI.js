import axios from 'axios';
import { useState, useEffect } from 'react';
import PhotoCard from '../components/PhotoCard';

const URL = "/B551011/PhotoGalleryService1/galleryList1";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

function PhotoAPI() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setData(null);
            setLoading(true);
            setError(null);

            const pageNo = 10;
            const numOfRows = 10;
            const MobileOS = 'ETC';
            const MobileApp = 'Bestie'

            const response = await axios.get(`${PROXY}${URL}?serviceKey=${process.env.REACT_APP_DATA_API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`)

            setData(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) {
        console.log(error)
        return <div>Error...</div>;
    }
    if (!data) return null;

    const photoItems = data.response.body.items.item
    console.log(photoItems);

    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col items-start'>
                {
                    photoItems.map((photo, index) => (
                        <PhotoCard key={index} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
}

export default PhotoAPI;