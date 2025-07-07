import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState("yellow");

    if (!product) return null;

    return (
        <div className="diamond-card p-4 border rounded-md shadow-sm max-w-[190px]">
            <div className="image-container mb-3">
                <img
                    src={product.images[selectedColor]}
                    alt={`${product.name} - ${selectedColor}`}
                    className="product-image w-full h-auto rounded"
                    loading="lazy"
                />
            </div>

            <h3 className="product-name text-lg font-semibold mb-1">{product.name}</h3>

            {product.price !== undefined && (
                <p className="product-price text-blue-600 font-medium mb-2">
                    ${product.price.toFixed(2)} USD
                </p>
            )}

            <ColorPicker selectedColor={selectedColor} onSelectColor={setSelectedColor} />

            <p className="color-name mt-1 text-sm text-gray-700 font-medium">
                {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} Gold
            </p>

            <RatingStars score={product.popularityScore} />
        </div>
    );
};

export default ProductCard;
