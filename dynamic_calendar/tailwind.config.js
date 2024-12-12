module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#4F46E5', // Blue for primary elements
		  secondary: '#3B82F6', // Lighter blue for secondary elements
		  work: '#10B981', // Green for work events
		  personal: '#F59E0B', // Orange for personal events
		  other: '#EF4444', // Red for other events
		},
	  },
	},
	plugins: [require('@tailwindcss/forms')],
  };
  