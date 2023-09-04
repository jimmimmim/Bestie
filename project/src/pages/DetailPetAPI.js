import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "/B551011/KorService1/searchStay1";

function DetailPetAPI() {
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

            const response = await axios.get(`${URL}?serviceKey=${process.env.REACT_APP_DATA_API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`)

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

    console.log(data.response.body.items);

    return (
        <div className="App">
            <div className='flex flex-col items-start'>

            </div>
        </div>
    );
}

export default DetailPetAPI;