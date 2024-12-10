import { colorsToken } from './src/constants/theme/theme.constant';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: colorsToken,
        },
    },
    plugins: [],
}

