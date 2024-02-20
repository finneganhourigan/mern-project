/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            shippori: ['Shippori Antique'],
        },
        extend: {
            colors: {
                text: '#ffffff',
                background: '#171717',
                primary: '#a41818',
                secondary: '#9968e1',
                accent: '#6c35a7',
                // 'text': '#101911',
                // 'background': '#fcfdfc',
                // 'primary': '#3bbf46',
                // 'secondary': '#d2ba98',
                // 'accent': '#cea469',
            },
            boxShadow: {
                discShadow: '2px 4px 4px rgba(0, 0, 0, 0.8)', // Custom drop shadow
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                'custom-about-page': '1450px',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
