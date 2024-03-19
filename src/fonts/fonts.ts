import localFont from 'next/font/local'

export const gilroy = localFont({
  src: [
    {
      path: './../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Gilroy-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const uniSans = localFont({
  src: [
    {
      path: './../../public/fonts/UniSans-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './../../public/fonts/UniSans-Heavy.ttf',
      weight: '1000',
      style: 'normal',
    },
  ]
})