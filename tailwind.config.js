const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./src/**/*.{html,js,ts}",
    ],
    plugins: [],
    important: true,
    theme: {
        fontSize: {
            'xs': '10px',
            'sm': '12px',
            'md': '14px',
            'base': '14px',
            'lg': '16px',
            'xl': '18px',
            '2xl': '20px',
            '3xl': '24px',
            '4xl': '32px',
            '5xl': '60px',
            '6xl': '2.5rem',
            '7xl': '3rem',
            '8xl': '4rem',
            '9xl': '6rem',
            '10xl': '8rem'
        },
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1440px'
        },
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite'
            },
            colors: {
                'blue': {
                    'bg': '#E5EAFF',
                    'fg': '#1F48E7'
                },
                'green': {
                    'bg': '#FBFFEB',
                    'fg': '#B8D53E'
                },
                'grey': {
                    'bg': '#F2F2F2',
                    'fg': '#BBBBBB'
                },
                'mint': {
                    'bg': '#DFFFFD',
                    'fg': '#08B4AB'
                },
                'orange': {
                    'bg': '#FFF4E8',
                    'fg': '#FA8C16'
                },
                'red': {
                    'bg': '#FFF4F4',
                    'fg': '#FF3340'
                },
                'pink': {
                    'bg': '#FFF0F6',
                    'fg': '#FF5CB4'
                },
                'sky': {
                    'bg': '#E6F7FF',
                    'fg': '#279FF4'
                },
                'violet': {
                    'bg': '#F9F1FF',
                    'fg': '#9038F5'
                },
                'complete': {
                    'bg': '#F2F2F2',
                    'fg': '#08B4AB'
                },
                'olive': {
                    100: '#e2f6f0',
                    200: '#cce6df',
                    300: '#08b4ab',
                    400: '#038c65',
                    500: '#007151',
                },
                'gray': {
                    100: '#dddddd',
                    200: '#d6d6d6',
                    300: '#cccccc',
                    400: '#bbbbbb',
                    500: '#888888',
                    600: '#555555',
                    700: '#222222',
                    800: '#000000',
                },
                'lightgray': {
                    100: '#ffffff',
                    200: '#fbfbfb',
                    300: '#f9f9f9',
                    400: '#f6f6f6',
                    500: '#f2f2f2',
                    600: '#eeeeee',
                },
                'gnb': {
                    'active': '#fffded',
                    'link': '#fae000',
                    'bg': '#2c2d36',
                },
                'wrong': {
                    'line': '#ff838b',
                    'button': '#ff3340',
                    'bold': '#af252e',
                    'bg': '#fff4f4',
                }
            },
            flex: {
                '0': '0 0 auto'
            },
            opacity: {
                12: '0.12',
                38: '0.38',
                87: '0.87'
            },
            rotate: {
                '-270': '270deg',
                '15': '15deg',
                '30': '30deg',
                '60': '60deg',
                '270': '270deg'
            },
            scale: {
                '-1': '-1'
            },
            zIndex: {
                '-1': -1,
                '49': 49,
                '60': 60,
                '70': 70,
                '80': 80,
                '90': 90,
                '99': 99,
                '999': 999,
                '9999': 9999,
                '99999': 99999
            },
            spacing: {
                '13': '13px',
                '15': '15px',
                '16': '16px',
                '18': '18px',
                '20': '20px',
                '22': '22px',
                '24': '24px',
                '26': '26px',
                '30': '30px',
                '32': '32px',
                '37': '37px',
                '40': '40px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                '80': '80px',
                '90': '90px',

                // Bigger values
                '100': '25rem',
                '120': '30rem',
                '128': '32rem',
                '140': '35rem',
                '160': '40rem',
                '180': '45rem',
                '192': '48rem',
                '200': '50rem',
                '240': '60rem',
                '256': '64rem',
                '280': '70rem',
                '320': '80rem',
                '360': '90rem',
                '400': '100rem',
                '480': '120rem',

                // Fractional values
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%'
            },
            lineHeight: {
                '22': '22px',
                '24': '24px',
                '26': '26px',
                '28': '28px',
                '32': '32px',
                '40': '40px',
            },
            letterSpacing: {
                tightest: '-1px',
                tighter: '-0.5px',
                tight: '-0.2px',
                normal: '0',
                wide: '2px',
                wider: '5px',
                widest: '1px',
            },
            minHeight: ({theme}) => ({
                ...theme('spacing')
            }),
            maxHeight: {
                none: 'none'
            },
            minWidth: ({theme}) => ({
                ...theme('spacing'),
                screen: '100vw'
            }),
            maxWidth: ({theme}) => ({
                ...theme('spacing'),
                screen: '100vw'
            }),
            transitionDuration: {
                '400': '400ms'
            },
            transitionTimingFunction: {
                'drawer': 'cubic-bezier(0.25, 0.8, 0.25, 1)'
            },

        }
    },
}
