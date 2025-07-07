import React from "react";

const RatingStars = ({ score }) => {
    const rating = score * 5;
    const fullStars = Math.floor(rating);
    const remainder = rating % 1;
    const hasHalfStar = remainder >= 0.25 && remainder < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <span key={`full-${i}`} className="star full" aria-label="Full star" role="img">
                ★
            </span>
        );
    }

    if (hasHalfStar) {
        stars.push(
            <span key="half" className="star half" aria-label="Half star" role="img">
                ★
            </span>
        );
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <span key={`empty-${i}`} className="star empty" aria-label="Empty star" role="img">
                ☆
            </span>
        );
    }


    return (
        <div
            className="rating"
            aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
            role="img"
            style={{ userSelect: "none" }}
        >
            {stars} <span className="rating-score">{rating.toFixed(1)}/5</span>
        </div>
    );


};

export default RatingStars;
