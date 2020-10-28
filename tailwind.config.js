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
            keyframes: {
                slideup: {
                    '0%'   : { transform: 'translateY(70%)'},
                    '100%' : { transform: 'translateY(0%)' },
                },
                slidedown: {
                    '0%'   : { transform: 'translateY(-70%)'},
                    '100%' : { transform: 'translateY(0%)' },
                },
                slideleft: {
                    '0%'   : { transform: 'translateX(70%)'},
                    '100%' : { transform: 'translateX(0%)' },
                },
                slideright: {
                    '0%'   : { transform: 'translateX(-70%)'},
                    '100%' : { transform: 'translateX(0%)' },
                },
                slideup_fadein: {
                    '0%'   : { opacity: 0, transform: 'translateY(70%)'},
                    '100%' : { opacity: 1, transform: 'translateY(0%)' },
                },
                slidedown_fadein: {
                    '0%'   : { opacity: 0, transform: 'translateY(-70%)'},
                    '100%' : { opacity: 1, transform: 'translateY(0%)' },
                },
                slideleft_fadein: {
                    '0%'   : { opacity: 0, transform: 'translateX(70%)'},
                    '100%' : { opacity: 1, transform: 'translateX(0%)' },
                },
                slideright_fadein: {
                    '0%'   : { opacity: 0, transform: 'translateX(-70%)'},
                    '100%' : { opacity: 1, transform: 'translateX(0%)' },
                },
                fadein :{
                    '0%'   : { opacity: 0 },
                    '100%' : { opacity: 1 },
                },
                fadeout :{
                    '0%'   : { opacity: 1 },
                    '100%' : { opacity: 0 },
                },
            },
            animation: {
                slideup: 'slideup 1s ease-in-out',
                slidedown: 'slidedown 1s ease-in-out',
                slideleft: 'slideleft 1s ease-in-out',
                slideright: 'slideright 1s ease-in-out',
                slideup_fadein: 'slideup_fadein 1s ease-in-out', 
                slidedown_fadein: 'slidedown_fadein 1s ease-in-out', 
                slideleft_fadein: 'slideleft_fadein 1s ease-in-out', 
                slideright_fadein: 'slideright_fadein 1s ease-in-out', 
            },
        },
    },
    variants: {},
    plugins: [],
}