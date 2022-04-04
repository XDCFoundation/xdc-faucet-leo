module.exports = {
  purge: {
    // enabled: true,
    content: [
    ],
    css: [
        './src/assets/styles/custom.css'
    ],
    options: {
      safelist: [
      ],
      safelistPatterns: [
      ],
      keyframes: true,
      fontFace: true,
    },
    extract: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  important: true,
  theme: {
    screens: { // specifying screens is mandatory in every tailwind.config file
      xs: "480px",   //min-width 480px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
    },
    colors: {
      transparent: "transparent",
      current: 'currentColor',
      white: "#FFFFFF",
      black: {
        50: "#141414"
      },
      primary: {
        50: "#FFDB0A"
      },
      blue: {
        50: "#3D61B0"
      },
      grey: {
        50: "#F6FAFC"
      },
      red: {
        50: "#FF6142"
      },
      navyBlue: {
        50: "#26458C"
      },
      darkGrey: {
        50: "#333333"
      }

    },

    fontSize: { // `[fontSize, { letterSpacing, lineHeight }]`

      'ft1': ['12px', { //Poppins Regular
        letterSpacing: '0em',
        lineHeight: '18px',
      }],
      'ft2': ['14px', {
        letterSpacing: '0em',
        lineHeight: '21px',
      }],
      'ft3': ['15px', {
        letterSpacing: '0em',
        lineHeight: '23px',
      }],
      'ft4': ['16px', {
        letterSpacing: '0em',
        lineHeight: '25px',
      }],
      'ft5': ['16px', {
        letterSpacing: '0em',
        lineHeight: '22px',
      }],
      'ft6': ['18px', {
        letterSpacing: '0em',
        lineHeight: '27px',
      }],
      'ft7': ['22px', {
        letterSpacing: '0em',
        lineHeight: '33px',
      }],
      'ft8': ['24px', {
        letterSpacing: '0em',
        lineHeight: '35px',
      }],
      'ft9': ['34px', { //H3
        letterSpacing: '0em',
        lineHeight: '62px',
      }],
      'ft10': ['38px', {
        letterSpacing: '0em',
        lineHeight: '57px',
      }],
      'ft11': ['44px', {
        letterSpacing: '0em',
        lineHeight: '62px',
      }],
    },


    fontFamily: {
      PoppinsBold: [
        "Poppins-Bold", 'sans-serif'
      ],
      PoppinsSemiBold: [
        "Poppins-SemiBold", 'sans-serif'
      ],
      PoppinsRegular: [
        "Poppins-Regular", 'sans-serif'
      ],
      PoppinsMedium: [
        "Poppins-Medium", 'sans-serif'
      ],
    },


    boxShadow: {
      // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      DEFAULT: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      '2xl': "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
      lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
      outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)"
    },

    backgroundImage: theme => ({
      'dummy': "url('/public/images/Mask-Group-3.png')", //tailwind class => bg-dummy
    }),

    extend: { //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: { //common for width, height, padding, margin
        4.5: "18px",         //p-4.5 , m-4.5 , w-4.5, h-4.5
        7.75: "31px",
        9.5: "38px",
        11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        13: "52px",
        15: "60px",
        18.5: "74px",
        19.25: "77px",
        20.5: "82px",
        21.25: "85px",
        25.5: "98px",
        29: "116px",
        35: "140px",
        36.5: "146px",
        45: "180px",
        57.5: "230px",
        61: "244px",
        65: "260px",
      },
      borderWidth: {

      },
      borderRadius: { //same as border width
        '5-5xl': "34px",
      },
    },
  },

  variants: { //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
    width: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    transform: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      grayscale: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
  darkMode: 'class'
}
