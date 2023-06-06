const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                serif: ['PT Sans', ...defaultTheme.fontFamily.serif],
            },
            screens: {
                '2k': '1980px',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    daisyui: {
        themes: [
            {
                winter: {
                    ...require('daisyui/src/theming/themes')[
                        '[data-theme=winter]'
                    ],
                    primary: '#2c75ff',
                },

                night: {
                    ...require('daisyui/src/theming/themes')[
                        '[data-theme=night]'
                    ],
                    primary: '#2c75ff',
                },
            },
        ],
        // themes: false,
    },
};
