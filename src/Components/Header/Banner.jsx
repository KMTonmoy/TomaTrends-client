import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('/fakebanner.json')
            .then(response => response.json())
            .then(data => setBanners(data));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    if (banners.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='relative w-full rounded-2xl  h-[600px] overflow-hidden'>
            {banners.map((banner, index) => (
                <div
                    key={banner.id}
                    className={`absolute  inset-0 transition-transform duration-1000 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{
                        backgroundImage: `url(${banner.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="h-full px-2 w-full flex items-center justify-start bg-black bg-opacity-50">
                        <div className="text-left pl-10 max-w-[700px] text-white">
                            <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                            <p className="text-xl">{banner.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
                <button
                    onClick={() => setCurrentIndex((currentIndex - 1 + banners.length) % banners.length)}
                    className='text-white bg-black bg-opacity-50 p-2 rounded-full'
                >
                    &#8249;
                </button>
            </div>
            <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % banners.length)}
                    className='text-white bg-black bg-opacity-50 p-2 rounded-full'
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Banner;
