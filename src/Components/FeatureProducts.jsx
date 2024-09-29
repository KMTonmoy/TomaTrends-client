import React, { useEffect, useState } from 'react';

const FeatureProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const truncateText = (text, maxLength) =>
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
    if (error) return <div className="text-center py-20 text-xl text-red-500">Error: {error}</div>;

    return (
        <div className="py-20 px-5  ">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
                Featured Products
                <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2"></span>
            </h1>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div key={product.id} className="p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold mt-3">{truncateText(product.name, 30)}</h3>
                        <p className="text-lg text-gray-600 mt-1">{product.price}</p>
                        <p className="text-gray-500 mt-2">{truncateText(product.description, 70)}</p>
                        <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureProducts;
