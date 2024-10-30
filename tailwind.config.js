/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

