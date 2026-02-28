/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    950: '#0a1f1c',
                    900: '#12332e',
                    800: '#1a4d45',
                },
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f1cc7a',
                    dark: '#b8860b',
                },
                champagne: {
                    DEFAULT: '#fdf6e3',
                    light: '#fffcf5',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                reveal: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0px)' },
                }
            }
        },
    },
    plugins: [],
}
