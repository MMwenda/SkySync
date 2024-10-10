/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //scan for the utility classes in the html file in the root.
  // This allows you to use utility classes in HTML files, and Tailwind will generate the corresponding CSS styles for you.
  theme: {
    
    screens:{
     sm: '480px',
     md: '768px',
     lg: '976px',
     xl: '1440px' 
    },
    extend: {
      colors: {
        tangyOrange:'#443a2e',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

