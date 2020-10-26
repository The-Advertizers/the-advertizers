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
                    lighter: '#ffe74d',
                    default: '#ffdd00',
                    dark: '#e6c700'
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