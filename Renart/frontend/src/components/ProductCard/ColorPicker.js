import React from "react";

const colorOptions = {
    yellow: { name: "Yellow Gold", hex: "#E6CA97" },
    white: { name: "White Gold", hex: "#D9D9D9" },
    rose: { name: "Rose Gold", hex: "#E1A4A9" },
};

const ColorPicker = ({ selectedColor, onSelectColor }) => (
    <div className="color-picker mt-2" role="radiogroup" aria-label="Color picker">
        {Object.entries(colorOptions).map(([color, { hex, name }]) => (
            <button
                key={color}
                type="button"
                aria-checked={selectedColor === color}
                role="radio"
                aria-label={name}
                title={name}
                onClick={() => onSelectColor(color)}
                data-color={color}
                className={`color-button ${selectedColor === color ? "selected" : ""}`}
                style={{
                    backgroundColor: hex,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: selectedColor === color ? "1px solid #000" : "2px solid #ccc",
                    marginRight: 1,
                    cursor: "pointer",
                }}
            />
        ))}
    </div>
);

export default ColorPicker;
