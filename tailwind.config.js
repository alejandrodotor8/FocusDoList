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
					light: '#F4F4F7',
					DEFAULT: '#A8A8A8',
					dark: '#3E3E3E',
				},
			},
		},
	},
	plugins: [],
}
