import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "/B551011/KorService1/detailPetTour1/";

function APItestPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setData(null);
            setLoading(true);
            setError(null);

            // const response = await axios.get(URL, {
            //     params: {
            //         serviceKey: process.env.REACT_APP_DATA_API_KEY,
            //         pageNo: 10,
            //         numOfRows: 10,
            //         MobileOS: 'ETC',
            //         MobileApp: 'Bestie',
            //     }
            // });
            const pageNo = 10;
            const numOfRows = 10;
            const MobileOS = 'ETC';
            const MobileApp = 'Bestie'

            const response = await axios.get(`/B551011/KorService1/detailPetTour1?serviceKey=${process.env.REACT_APP_DATA_API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`)

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

    console.log(data.response.body.items)

    return (
        <div className="App">
            <div className='flex flex-col items-start'>
                <p>contentid: {data.response.body.items.item[0].contentid}</p>
                <p>acmpyNeedMtr: {data.response.body.items.item[0].acmpyNeedMtr}</p>
                <p>acmpyPsblCpam: {data.response.body.items.item[0].acmpyPsblCpam}</p>
                <p>acmpyTypeCd: {data.response.body.items.item[0].acmpyTypeCd}</p>
                <p>etcAcmpyInfo: {data.response.body.items.item[0].etcAcmpyInfo}</p>
                <p>relaFrnshPrdlst: {data.response.body.items.item[0].relaFrnshPrdlst}</p>
                <p>relaPosesFclty: {data.response.body.items.item[0].relaPosesFclty}</p>
            </div>
        </div>
    );
}

export default APItestPage;