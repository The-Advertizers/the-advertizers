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
                    lighter: '#fff19a',
                    default: '#ffdd00',
                    dark: '#ffaa00'
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