/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
			colors: {
				//Primary
				lightRed: 'hsl(0, 100%, 67%)',
				orangeYellow: 'hsl(39, 100%, 56%)',
				greenTeal: 'hsl(166, 100%, 37%)',
				cobaltBlue: 'hsl(234, 85%, 45%)',
				//Gradients
				lightSlateBlue: 'hsl(252, 100%, 67%)', //background
				lightRoyalBlue: 'hsl(241, 81%, 54%)', //background
				violetBlue: 'hsla(256, 72%, 46%, 1)', //circle
				persianBlue: 'hsla(241, 72%, 46%, 0)', //circle
				//Neutral
				white: 'hsl(0, 0%, 100%)',
				paleBlue: 'hsl(221, 100%, 96%)',
				lightLavender: 'hsl(241, 100%, 89%)',
				darkGrayBlue: 'hsl(224, 30%, 27%)',
			},
			fontFamily: {
				hanken: ['Hanken Grotesk'],
			},
		},
	},
	plugins: [],
};
