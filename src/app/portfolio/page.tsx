'use client'

import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import FixedControls from '@/components/FixedControls/FixedControls'
import Intro from '@/components/Intro/Intro'
import portfolio1 from '@/assets/images/portfolio-1.jpg'
import portfolio2 from '@/assets/images/portfolio-2.jpg'
import portfolio3 from '@/assets/images/portfolio-3.jpg'
import portfolio4 from '@/assets/images/portfolio-4.jpg'
import portfolio5 from '@/assets/images/portfolio-5.jpg'
import portfolio6 from '@/assets/images/portfolio-6.jpg'
import portfolio7 from '@/assets/images/portfolio-7.jpg'
import portfolio8 from '@/assets/images/portfolio-8.jpg'
import portfolio9 from '@/assets/images/portfolio-9.jpg'
import portfolio10 from '@/assets/images/portfolio-10.jpg'


const Portfolio: FC = () => {
  const titleSvgFill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1077 146" fill="none"><path d="M0.2 144V2.4H56.8C91.4 2.4 108.6 27.4 108.6 52.4C108.6 77.6 91.2 102.6 57 102.6H36V144H0.2ZM36 70.8H56.8C78.4 71 78.4 35.6 56.8 35.8H36V70.8ZM126.433 97.4V49C126.433 16.4 155.633 0.399989 185.033 0.399989C214.433 0.399989 243.833 16.6 243.833 49V97.4C243.833 129.8 214.633 146 185.233 146C155.833 146 126.433 129.8 126.433 97.4ZM162.233 49V97.4C162.233 107.8 173.833 112.8 185.233 112.8C196.633 112.8 208.033 107.6 208.033 97.4V49C208.033 38 196.233 33 184.633 33C173.433 33 162.233 38.6 162.233 49ZM344.241 144L311.441 99H305.041V144H268.841V2.4H325.441C354.641 2.4 377.241 15.8 378.041 49C378.041 75.2 367.441 90 350.241 95.4L388.841 144H344.241ZM305.041 68.2H326.041C348.641 68.2 348.641 35.8 326.041 35.8H305.041V68.2ZM504.403 36.2H466.803V144H430.603V36.2H393.003V2.19999H504.403V36.2ZM560.595 36.4V61.8H615.195V95.2H560.595V144H524.395V2.4H622.995V36.4H560.595ZM642.23 97.4V49C642.23 16.4 671.43 0.399989 700.83 0.399989C730.23 0.399989 759.63 16.6 759.63 49V97.4C759.63 129.8 730.43 146 701.03 146C671.63 146 642.23 129.8 642.23 97.4ZM678.03 49V97.4C678.03 107.8 689.63 112.8 701.03 112.8C712.43 112.8 723.83 107.6 723.83 97.4V49C723.83 38 712.03 33 700.43 33C689.23 33 678.03 38.6 678.03 49ZM784.638 144V2.4H820.638V108.6H878.238V144H784.638ZM934.055 2.4V144H898.255V2.4H934.055ZM959.058 97.4V49C959.058 16.4 988.258 0.399989 1017.66 0.399989C1047.06 0.399989 1076.46 16.6 1076.46 49V97.4C1076.46 129.8 1047.26 146 1017.86 146C988.458 146 959.058 129.8 959.058 97.4ZM994.858 49V97.4C994.858 107.8 1006.46 112.8 1017.86 112.8C1029.26 112.8 1040.66 107.6 1040.66 97.4V49C1040.66 38 1028.86 33 1017.26 33C1006.06 33 994.858 38.6 994.858 49Z" fill="url(#paint0_linear_812_7299)"/><defs><linearGradient id="paint0_linear_812_7299" x1="1052.81" y1="150.392" x2="21.0315" y2="-346.335" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  const titleSvgStroke = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1077 146" fill="none"><path d="M0.2 144V2.4H56.8C91.4 2.4 108.6 27.4 108.6 52.4C108.6 77.6 91.2 102.6 57 102.6H36V144H0.2ZM36 70.8H56.8C78.4 71 78.4 35.6 56.8 35.8H36V70.8ZM126.433 97.4V49C126.433 16.4 155.633 0.399989 185.033 0.399989C214.433 0.399989 243.833 16.6 243.833 49V97.4C243.833 129.8 214.633 146 185.233 146C155.833 146 126.433 129.8 126.433 97.4ZM162.233 49V97.4C162.233 107.8 173.833 112.8 185.233 112.8C196.633 112.8 208.033 107.6 208.033 97.4V49C208.033 38 196.233 33 184.633 33C173.433 33 162.233 38.6 162.233 49ZM344.241 144L311.441 99H305.041V144H268.841V2.4H325.441C354.641 2.4 377.241 15.8 378.041 49C378.041 75.2 367.441 90 350.241 95.4L388.841 144H344.241ZM305.041 68.2H326.041C348.641 68.2 348.641 35.8 326.041 35.8H305.041V68.2ZM504.403 36.2H466.803V144H430.603V36.2H393.003V2.19999H504.403V36.2ZM560.595 36.4V61.8H615.195V95.2H560.595V144H524.395V2.4H622.995V36.4H560.595ZM642.23 97.4V49C642.23 16.4 671.43 0.399989 700.83 0.399989C730.23 0.399989 759.63 16.6 759.63 49V97.4C759.63 129.8 730.43 146 701.03 146C671.63 146 642.23 129.8 642.23 97.4ZM678.03 49V97.4C678.03 107.8 689.63 112.8 701.03 112.8C712.43 112.8 723.83 107.6 723.83 97.4V49C723.83 38 712.03 33 700.43 33C689.23 33 678.03 38.6 678.03 49ZM784.638 144V2.4H820.638V108.6H878.238V144H784.638ZM934.055 2.4V144H898.255V2.4H934.055ZM959.058 97.4V49C959.058 16.4 988.258 0.399989 1017.66 0.399989C1047.06 0.399989 1076.46 16.6 1076.46 49V97.4C1076.46 129.8 1047.26 146 1017.86 146C988.458 146 959.058 129.8 959.058 97.4ZM994.858 49V97.4C994.858 107.8 1006.46 112.8 1017.86 112.8C1029.26 112.8 1040.66 107.6 1040.66 97.4V49C1040.66 38 1028.86 33 1017.26 33C1006.06 33 994.858 38.6 994.858 49Z"/><defs><linearGradient id="paint0_linear_812_7299" x1="1052.81" y1="150.392" x2="21.0315" y2="-346.335" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  
  const slider = [
    {
      id: 1,
      title: 'Title 1',
      path: portfolio1,
      isMobile: true
    },
    {
      id: 2,
      title: 'Title 2',
      path: portfolio2,
      isMobile: true
    },
    {
      id: 3,
      title: 'Title 3',
      path: portfolio3,
      isMobile: true
    },
    {
      id: 4,
      title: 'Title 4',
      path: portfolio4,
      isMobile: true
    },
    {
      id: 5,
      title: 'Title 5',
      path: portfolio5,
      isMobile: true
    },
    {
      id: 6,
      title: 'Title 6',
      path: portfolio6,
      isMobile: true
    },
    {
      id: 7,
      title: 'Title 7',
      path: portfolio7,
      isMobile: true
    },
    {
      id: 8,
      title: 'Title 8',
      path: portfolio8,
      isMobile: true
    },
    {
      id: 9,
      title: 'Title 8',
      path: portfolio9,
      isMobile: true
    },
    {
      id: 10,
      title: 'Title 10',
      path: portfolio10,
      isMobile: true
    },
  ]
  
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls 
          disabledFooter
          disabledPortfolio
          disabledLoaderOverlay
          disabledCallback
        >
          <Intro 
            title='Portfolio'
            titleSvgFill={titleSvgFill}
            titleSvgStroke={titleSvgStroke}
            slider={slider}
            isFullpage
          />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default Portfolio