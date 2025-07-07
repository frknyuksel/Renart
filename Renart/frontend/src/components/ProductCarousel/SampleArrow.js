import React from "react";

export const SampleNextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: "flex",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            right: "10px",
            zIndex: 1,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        }}
        onClick={onClick}
        aria-label="Next slide"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
        >
            <path d="M8 5l8 7-8 7" />
        </svg>
    </div>
);


export const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: "flex",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            left: "10px",
            zIndex: 1,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        }}
        onClick={onClick}
        aria-label="Previous slide"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
        >
            <path d="M16 19l-8-7 8-7" />
        </svg>
    </div>
);




