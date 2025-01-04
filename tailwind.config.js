/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '380px', 
      'md': '768px',  
      'xl': '1280px', 
    },
    fontFamily: {
      fira: ['FiraCode', 'monospace'],
    },
    extend: {
      keyframes: {
        
        vibrate: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(300%)' }, // Начало с правого края экрана
          '100%': { transform: 'translateX(-100%)' }, // Конец на левом краю экрана
        },
        shakeRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Подпрыгивание
          '100%': { transform: 'translateY(0)' },
        },
        scaleRotate: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
        vibrate: 'vibrate 0.5s linear infinite',
        shakeRotate: 'shakeRotate 0.5s ease-in-out infinite',
        jump: 'jump 0.6s ease-in-out infinite', // Анимация для прыгающих элементов
        scaleRotate: 'scaleRotate 2s ease-in-out infinite',
        fadeIn: "fadeIn 0.3s ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      colors: {
        'almost-white': 'hsl(0, 0% ,96%)',
        'almost-black': 'hsl(240, 20%, 8%)',
      },
    },
  },
  plugins: [],
}







