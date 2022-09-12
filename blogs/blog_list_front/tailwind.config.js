module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1/16': '6%',
        '1/24': '4%',
      },
      height: (theme) => ({
        'screen-75': '75vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
