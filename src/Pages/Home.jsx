import React from 'react';
import Banner from '../Components/Header/Banner';
import LatestTrend from '../Components/LatestTrend/LatestTrend';

const Home = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto my-10'>
            <Banner />
            <div className='flex mt-2 flex-col gap-10'>
                <LatestTrend />
            </div>
        </div>
    );
};

export default Home; 