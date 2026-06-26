/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                trusty: {
                    blue: '#1a237e',
                    green: '#2e7d32',
                },
            },
            boxShadow: {
                card: '0 20px 40px rgba(26, 35, 126, 0.12)',
            },
        },
    },
    plugins: [],
}