// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss') ({
    content: [
        './src/**/*.html', 
        './src/**/*.tsx', 
        './src/**/*.ts', 
        './src/**/*.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                ...process.env.NODE_ENV === 'production' 
                ? [purgecss]
                : []
            ],
        },
    },
};