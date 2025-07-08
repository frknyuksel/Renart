import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./SampleArrow";
import ProductCard from "../ProductCard/ProductCard";

const SORT_OPTIONS = [
    { value: "", label: "Sıralama Seç" },
    { value: "priceAsc", label: "Fiyat: Artan" },
    { value: "priceDesc", label: "Fiyat: Azalan" },
    { value: "popularity", label: "Popülerlik" },
];

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;
                const res = await fetch(apiUrl);
                if (!res.ok) throw new Error("API fetch error");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "priceAsc") return a.price - b.price;
        if (sortOption === "priceDesc") return b.price - a.price;
        if (sortOption === "popularity") return b.popularityScore - a.popularityScore;
        return 0;
    });

    if (loading) return (<div className="spinner"></div>);
    if (error) return <p className="text-center mt-6 text-red-600">Error: {error}</p>;
    if (products.length === 0) return <p className="text-center mt-6">No products found.</p>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="p-8 max-w-full">
            <h2
                style={{ fontFamily: "Avenir-Book", fontSize: "45px", textAlign: "center" }}
                className="mb-8"
            >
                Product List
            </h2>

            <div className="flex justify-end mb-6">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-gray-500 rounded-lg px-5 py-3 pr-10 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-800 transition cursor-pointer w-48"
                    aria-label="Ürün sıralama seçeneği"
                >
                    {SORT_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <Slider {...settings}>
                {sortedProducts.map((product) => (
                    <div
                        key={product.name}
                        className="flex justify-center text-left px-2 max-w-[190px]"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ProductCarousel;
