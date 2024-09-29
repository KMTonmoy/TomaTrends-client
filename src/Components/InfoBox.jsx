import React from 'react';

const InfoBox = () => {
    const infoItems = [
        {
            title: "Quality Assurance",
            icon: "🔍"
        },
        {
            title: "Customer Satisfaction",
            icon: "😊"
        },
        {
            title: "Trust and Reliability",
            icon: "🤝"
        },
        {
            title: "Personalization",
            icon: "🎨"
        },
        {
            title: "Continuous Improvement",
            icon: "🔄"
        },
    ];

    return (
        <section className="py-16  ">
            <div className="container mx-auto px-4">

                <h1 className="text-center my-5 capitalize text-4xl font-bold text-gray-800  ">
                    Our Commitment                 <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2"></span>
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 w-[300px] bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
                        >
                            <div className="text-4xl mb-4 text-pink-500">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-center text-gray-700">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoBox;
