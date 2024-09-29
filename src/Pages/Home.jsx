import React from 'react';
import Banner from '../Components/Header/Banner';
import LatestTrend from '../Components/LatestTrend/LatestTrend';

import FeaturedImage from '../Components/FeaturedImage';
import FAQs from '../Components/Faq';
import FeatureProducts from '../Components/FeatureProducts';
import InfoBox from '../Components/InfoBox';


const Home = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto my-10'>
            <Banner />
            <div className='flex mt-10 flex-col gap-10 '>

                <LatestTrend />

                <FeatureProducts />



                <FeaturedImage />
                
                <InfoBox />

                <div>
                    <h1 className="text-center my-5 capitalize text-4xl font-bold text-gray-800  ">
                        frequently asked question                        <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2"></span>
                    </h1>
                    <FAQs />
                </div>

            </div>
        </div>
    );
};

export default Home; 