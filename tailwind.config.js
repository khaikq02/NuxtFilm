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
      },
      spacing: {
        30: '30px',
        50: '50px',
      },
    },
  },
  plugins: [],
}
