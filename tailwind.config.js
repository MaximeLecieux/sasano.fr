/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		white: 'rgb(255 255 255)',
  		primary: {
  			'200': '#BF5A36',
  			'300': '#AF5331',
  			'400': '#9F4B2D',
  			'600': '#6F3520',
  			DEFAULT: '#8C4227'
  		},
  		secondary: {
  			'200': '#E7B89D',
  			'300': '#E2AC8D',
  			'400': '#DEA07C',
  			'600': '#D6895C',
  			DEFAULT: '#D99066'
  		},
  		gray: {
  			'300': '#fafafa',
  			'400': '#f2f2f2',
  			'500': '#e5e5e5',
  			'600': '#b2b2b2',
  			'700': '#808080',
  			'800': '#333333',
  			DEFAULT: '#1d1d1d'
  		},
  		alert: {
  			danger: '#BC3124',
  			success: '#90DA1A',
  			warning: '#FEB72F'
  		},
  		back: {
  			'200': '#FAF6F0',
  			'400': '#F0E4D1',
  			DEFAULT: '#F5EDE0'
  		}
  	},
  	fontSize: {
  		'8xl': [
  			'120px',
  			{
  				lineHeight: '120px',
  				letterSpacing: '-0.6px',
  				fontWeight: '500'
  			}
  		],
  		'7xl': [
  			'72px',
  			{
  				lineHeight: '80px',
  				letterSpacing: '-4.5px',
  				fontWeight: '600'
  			}
  		],
  		'6xl': [
  			'55px',
  			{
  				lineHeight: '60px',
  				letterSpacing: '-2.5px',
  				fontWeight: '500'
  			}
  		],
  		'5xl': [
  			'48px',
  			{
  				lineHeight: '54px',
  				letterSpacing: '-1.600000023841858px',
  				fontWeight: '500'
  			}
  		],
  		'4xl': [
  			'36px',
  			{
  				lineHeight: '44px',
  				letterSpacing: '-1.6000000476837158px',
  				fontWeight: '500'
  			}
  		],
  		'3xl': [
  			'28px',
  			{
  				lineHeight: '34px',
  				letterSpacing: '-1.600000011920929px',
  				fontWeight: '500'
  			}
  		],
  		'2xl': [
  			'24px',
  			{
  				lineHeight: '30px',
  				letterSpacing: '-1px',
  				fontWeight: '400'
  			}
  		],
  		lg: [
  			'21px',
  			{
  				lineHeight: '30px',
  				letterSpacing: '-0.800000011920929px',
  				fontWeight: '400'
  			}
  		],
  		base: [
  			'17px',
  			{
  				lineHeight: '25px',
  				letterSpacing: '-0.699999988079071px',
  				fontWeight: '400'
  			}
  		],
  		sm: [
  			'15px',
  			{
  				lineHeight: '23px',
  				letterSpacing: '-0.6000000238418579px',
  				fontWeight: '400'
  			}
  		],
  		caption1: [
  			'24px',
  			{
  				lineHeight: '24px',
  				letterSpacing: '-0.6000000238418579px',
  				fontWeight: '400'
  			}
  		],
  		caption2: [
  			'20px',
  			{
  				lineHeight: '24px',
  				letterSpacing: '-0.30000001192092896px',
  				fontWeight: '400'
  			}
  		],
  		caption3: [
  			'16px',
  			{
  				lineHeight: '18px',
  				letterSpacing: '-0.5px',
  				fontWeight: '400'
  			}
  		],
  		caption4: [
  			'13px',
  			{
  				lineHeight: '15px',
  				letterSpacing: '-0.2000000298023224px',
  				fontWeight: '400'
  			}
  		]
  	},
  	borderRadius: {
  		DEFAULT: '10px',
  		full: '9999px'
  	},
  	extend: {}
  }
}

