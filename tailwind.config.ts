import type { Config } from 'tailwindcss';


export default {
    darkMode: ['class'],
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
    ],
    theme: {
extend: {
container: {
center: true,
padding: '1rem',
screens: { lg: '1024px', xl: '1280px', '2xl': '1440px' }
},
fontFamily: {
sans: ['ui-sans-serif', 'system-ui']
},
colors: {
brand: {
50: '#ECFEFF',
100: '#CFFAFE',
200: '#A5F3FC',
300: '#67E8F9',
400: '#22D3EE',
500: '#06B6D4',
600: '#0891B2',
700: '#0E7490',
800: '#155E75',
900: '#164E63'
}
}
}
},
    plugins: []
} satisfies Config;