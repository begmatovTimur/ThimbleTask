/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                mainColor: "#313131FF",
                focusColor: "#217346FF",
                blockColorDarkTheme: "#595959FF",
                blockColorLightTheme: "#CCCCCCFF"
            },
            height: {
                full: "55%"
            }
        },
    },
    plugins: [],
}