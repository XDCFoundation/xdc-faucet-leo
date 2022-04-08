module.exports = {
  purge: [
    // enabled: true,
    "./src/modules/**/*.{js,jsx,ts,tsx}"
  ],
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
        50: "#141414",
        100:"#292929"
      },
      primary: {
        50: "#F5F8FF"
      },
      blue: {
        50: "#2358E5",
        100: "#2149B9",
        200: "#102C78"
      },
      grey: {
        50: "#9AA2B5",
        100: "#6C6C6C",
        150: "#B5B5B5",
        200: "#F5F5F5",
        250: "#A5A5A5",
      },
      red: {
        50: "#FF6142",
        100: "#ff1a1b",
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
        lineHeight: '20px',
      }],
      'ft5': ['16px', {
        letterSpacing: '0em',
        lineHeight: '22px',
      }],
      'ft6': ['17px', {
        letterSpacing: '0em',
        lineHeight: '20px',
      }],
      'ft7': ['18px', {
        letterSpacing: '0em',
        lineHeight: '21px',
      }],
      'ft8': ['20px', {
        letterSpacing: '0em',
        lineHeight: '24px',
      }],
      'ft9': ['24px', {
        letterSpacing: '0em',
        lineHeight: '35px',
      }],
      'ft10': ['26px', { //H3
        letterSpacing: '0em',
        lineHeight: '31px',
      }],
      'ft11': ['38px', {
        letterSpacing: '0em',
        lineHeight: '57px',
      }],
      'ft12': ['44px', {
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
      InterBold: [
        "Inter-Bold", 'sans-serif'
      ],
      InterSemiBold: [
        "Inter-SemiBold", 'sans-serif'
      ],
      InterRegular: [
        "Inter-Regular", 'sans-serif'
      ],
      InterMedium: [
        "Inter-Medium", 'sans-serif'
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

    // backgroundImage: theme => ({
    //   'dummy': "url('/public/images/Mask-Group-3.png')", //tailwind class => bg-dummy
    // }),

    extend: { //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: { //common for width, height, padding, margin
        1.75: "7px",
        2.25: "9px",
        2.75: "11px",
        3.25: "13px",
        3.75: "15px",
        4.5: "18px",//p-4.5 , m-4.5 , w-4.5, h-4.5
        4.75: "19px",
        6.75: "27px",
        7.75: "31px",
        9.5: "38px",
        10.25: "41px",
        11: "44px",
        11.25: "45px",
        11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        13: "52px",
        15: "60px",
        18.25: "73px",
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
      maxWidth: {
        123.75: "495px",
      },
      minHeight: {
        115: "460px"
      },
      borderWidth: {

      },
      borderRadius: { //same as border width
        '5-5xl': "34px",
      },
      scale: {
        144: "1.44",
      },
      animation: {
        progress: "loading 3s linear infinite",
      },
      keyframes: {
        loading: {
          "0%": {
            width: "16.6%",
          },
          "16.5%": {
            width: "16.6%",
          },
          "16.6%": {
            width: "33.3%",
          },
          "33.2%": {
            width: "33.3%",
          },
          "33.3%": {
            width: "49.9%;",
          },
          "49.8%": {
            width: "49.9%;",
          },
          "49.9%": {
            width: "66.5%",
          },
          "66.4%": {
            width: "66.5%",
          },
          "66.5%": {
            width: "83.1%",
          },
          "83%": {
            width: "83.1%",
          },
          "83.1%": {
            width: "100%",
          },
          "100%": {
            width: "100%",
          },
        },
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
