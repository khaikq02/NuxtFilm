module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        appBg: '#2f3640',
        white: '#ffffff',
        cardBg: '#2c3e50',
      },
      spacing: {
        10: '10px',
        20: '20px',
        30: '30px',
        50: '50px',
        100: '150px',
        'n-2/4': '-50%',
        300: '300px',
        500: '500px',
      },
      fontSize: {
        textHeader: ['30px', '30px'],
        textMainHeader: ['50px', '50px'],
        center2030: ['20px', '30px'],
        text20: ['20px', '20px'],
        text16: ['16px', '20px'],
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}
