module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    container: {
      center: true,
    },
    screens: {
      xs: '375px',
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "630px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
      // => @media (min-width: 1024px) { ... }
      xl: "1200px",
    },
    extend: {
      gridAutoColumns: {
        '1fr': 'grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));',
      },
      colors: {
        'blue': 'rgb(103 232 249)',
        'dark-blue':'rgb(30 41 59)',
        'accent':'rgb(220 38 38)',
        'active':'rgb(254 215 170)',
        'btn':'rgb(75 85 99)',
      },
    },
  },
  plugins: [],
};
