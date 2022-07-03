module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				focus: {
					red: '#ED4A71',
					blue: '#269AA9',
					green: '#25D5A1',
					yellow: '#FEC34C',
				},
				base: {
					100: '#F4F4F7',
					300: '#eaeaef',
					500: '#A8A8A8',
					700: '#3E3E3E',
				},
			},
		},
	},
	plugins: [],
}
