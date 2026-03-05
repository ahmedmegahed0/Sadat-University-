/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // enable dark mode by toggling the 'dark' class on HTML
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    DEFAULT: 'var(--color-primary-500)',
                },
                'background-light': '#f8f8f6',
                'background-dark': '#221e10',
                'brand-dark': '#1a1a1a',
                gold: {
                    500: '#c8a328', // stitching color from design
                },
                blue: {
                    600: '#1132d4', // stitching color from design
                }
            },
            fontFamily: {
                sans: ['"Lexend"', '"Public Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
