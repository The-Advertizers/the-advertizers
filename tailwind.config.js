module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                primary: '#fff',
                secondary: '#000',
                accent: {
                    lighter: '#ffe082',
                    default: '#ffb300',
                    dark: '#ff8f00'
                }
            },
            fontFamily: {
                'lemon': ['Lemon', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}