import React, { useState, useEffect } from 'react';

const FAQs = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await fetch('/faqs.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 flex items-center justify-center mb-5 md:mb-0">
                <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*fjAGp_YGPXNRI6Zo"
                    alt="FAQ Illustration"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* FAQ Section */}
            <div className="md:w-1/2 p-5  border-gray-300">
                <div className="space-y-4 w-full md:w-[500px]">
                    {faqs.map((item, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                onClick={() => toggleAnswer(index)}
                            >
                                <span className="font-semibold">{item.question}</span>
                                <span className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    &#x25BC; {/* Down Arrow */}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-white">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
