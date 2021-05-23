module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      width: {
        projects: '600px'
      },
      colors: {
        giulia: '#5CBEA7'
      },
      height: {
        min: 'calc(100vh - 6rem - 2rem)',
        payoff: 'calc(100vh - 6rem)',
        header: '6rem',
        projects: '396px'
      },
      backgroundImage: theme => ({
        mio: "url('/sitogs_mioass.png')",
        'mio-hover': "url('/mioass_sito.png')",
        main: "url('/background.png')",
        aron: "url('/aron_sitomio.png')",
        'aron-hover': "url('/sitomio_aron.png')",
        drawithme: "url('/drawithme.png')",
        'drawithme-hover': "url('/drawithmehover.png')",
        mioapp: "url('/mioapp.png')",
        'mioapp-hover': "url('/mioapp_hover.png')",
        'giulia-linkedin': "url('/giulia_linkedin.jpeg')",
        'giulia-reality': "url('/giulia_reality.jpeg')",
        footer: '2rem'
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
