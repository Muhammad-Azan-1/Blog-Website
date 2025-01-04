import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-border': '0 0 4px rgba(0, 0, 0, 0.2)', 
      },

      colors:{
        primary:'#171717',
        secondary:'#404040',
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },

      screens:{
        '2xl':{'min':'1370px'},
        '1xl':{'min':'1200px'},
        '0xl':{'min':'1100px'},
        'l':{'min':'900px'},
        'l2':{'min':'800px'},
        'xm':{'min':'560px'},
        'max':{'max':'560px'},
        'xm2':{'min':'450px'},
        'max2':{'max':'450px'},
        'xm3':{'min':'370px'},
        'max3':{'max':'370px'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
