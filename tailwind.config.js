/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sage: {
                    50: '#f7faf9',
                    100: '#f0f7f4',
                    200: '#e1ede8',
                    300: '#c5d9d1',
                    400: '#9dbbb0',
                    500: '#799f91',
                },
                forest: {
                    DEFAULT: '#1b3022',
                    light: '#2c4d37',
                    dark: '#0e1a12',
                },
                moss: {
                    DEFAULT: '#4a6741',
                    light: '#6b8a60',
                },
                mint: {
                    bright: '#00ffcc',
                    soft: '#a8e6cf',
                },
                charcoal: '#2d3436',
                cream: '#fdfcf8',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'mesh': 'mesh 15s ease infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                reveal: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0px)' },
                },
                mesh: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 255, 204, 0.3)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            }
        },
    },
    plugins: [],
}
