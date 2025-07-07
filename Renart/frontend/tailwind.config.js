
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat-regular': ['Montserrat-Regular',],
                'montserrat-medium': ['Montserrat-Medium',],
                'avenir-book': ['Avenir-Book',],
            },
            fontSize: {
                '12': '12px',
                '15': '15px',
            },
        },
    },
    plugins: [],
};
