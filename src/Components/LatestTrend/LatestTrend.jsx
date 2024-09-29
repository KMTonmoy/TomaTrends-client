import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TrendCard = ({ bgColor, title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <motion.div
                className="h-auto p-8 rounded-2xl md:w-[400px] w-full overflow-hidden relative shadow-lg transition-transform duration-300"
                style={{ backgroundColor: bgColor }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="text-center">
                    <h1 className="text-[#303030] text-[30px] md:text-[40px] font-semibold mb-3">
                        {title}
                    </h1>

                    {isHovered ? (
                        <motion.button
                            className="bg-[#D63384] w-[400px] md:w-full text-white px-6 py-2 mt-5 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Shop Now
                        </motion.button>
                    ) : (
                        <motion.p
                            className="text-[#636363]"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {description}
                        </motion.p>
                    )}

                    <div className="mt-5 flex justify-center">
                        <img className="h-[400px] rounded-xl" src={image} alt={title} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const LatestTrend = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/faketrends.json');
                const data = await response.json();
                setTrends(data);
            } catch (error) {
                console.error('Error fetching trends:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="px-5 -mb-10 mt-10 ">
                <h1 className="text-center text-4xl font-bold text-gray-800 relative mb-10">
                    Our Latest Trends
                    <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2"></span>
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-5 p-5">
                {trends.map((trend) => (
                    <TrendCard
                        key={trend.id}
                        bgColor={trend.bgColor}
                        title={trend.title}
                        description={trend.description}
                        image={trend.image}
                    />
                ))}
            </div>
        </>

    );
};

export default LatestTrend;
