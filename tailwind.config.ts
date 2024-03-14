import type { Config } from "tailwindcss";

// const config: Config = {
  
//   darkMode:["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   prefix:"",
//   theme: {
//     container:{
//       center:true,
//       padding:'2rem',
//       screens:{
//         "2xl":"1400px",
//       },
//     },
//     extend: {
//       keyframes:{
//        "according-down":{
//         from:{height:'0'},
//         to:{height:'var(--radix-accordion-content-height'}
//        }
//       },
//       animation:{
//         "accordion-down":"accordion-down 0.2s ease-out",
//         "accordion-up":'accordion-up 0.2s ease-out'
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors:{
//         primary:'#FFFFFF',
//         secondary:'#FD375C',
//         textprimary:'#666463'
//       }
//     },
//   },
//   plugins: [],
// };
const config: Config = {
  darkMode: 'class',
  // ...
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
    container:{
      center:true,
      padding:'2rem',
      screens:{
        "2xl":"1400px",
      },
    },
    extend: {
      keyframes:{
       "according-down":{
        from:{height:'0'},
        to:{height:'var(--radix-accordion-content-height)'} // You missed a closing parenthesis here
       }
      },
      animation:{
        "accordion-down":"accordion-down 0.2s ease-out",
        "accordion-up":'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:'#FFFFFF',
        secondary:'#FD375C',
        textprimary:'#666463'
      }
    },
  },
  plugins: [],
};

module.exports = config;
export default config;

