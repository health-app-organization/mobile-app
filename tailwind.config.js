/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        height: {
            '105': '450px',
            '128': '512px'
        },
        borderWidth: {
            '1': '1px'

        }
    },
},
  plugins: [],
}