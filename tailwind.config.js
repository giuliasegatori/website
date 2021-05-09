module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        payoff: 'calc(100vh - 6rem)',
        header: '6rem'
      },
      backgroundImage: theme => ({
        mio: "url('/icon2.png')",
        'mio-hover': "url('/vercel.svg')",
        main: "url('/background.png')"
      }),
      fontFamily: {
        sans: ['Poppins']
      },
      inset: {
        '2/5': '40%'
      }
    }

  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus']
    }
  },
  plugins: []
}
