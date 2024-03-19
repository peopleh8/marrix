'use client'

import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import Intro from '@/components/Intro/Intro'
import Beginning from '@/components/About/Beginning/Beginning'
import Breaking from '@/components/About/Breaking/Breaking'
import Mission from '@/components/About/Mission/Mission'
import Quote from '@/components/About/Quote/Quote'
import Team from '@/components/About/Team/Team'
import FixedControls from '@/components/FixedControls/FixedControls'

const About: FC = () => {
  const titleSvgFill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958 163" fill="none"><path d="M82.8 2.4L133.4 144H95L85.8 115.6H48L39.2 144H0.8L50.2 2.4H82.8ZM56 83.8H77.2L67.4 42.4H66.4L56 83.8ZM251.688 45.6C251.488 52 247.288 63.4 237.088 68.6C256.488 78.4 258.888 96.6 257.088 107.4C253.488 130.2 238.088 144 206.688 144H148.888V2.4H205.688C232.688 2.4 252.488 18.6 251.688 45.6ZM184.888 57.8H205.688C223.088 57.8 223.688 32.6 205.688 32.6H184.888V57.8ZM184.888 112.6H205.688C227.288 112.6 226.888 83.6 205.688 83.6H184.888V112.6ZM276.292 97.4V49C276.292 16.4 305.492 0.399989 334.892 0.399989C364.292 0.399989 393.692 16.6 393.692 49V97.4C393.692 129.8 364.492 146 335.092 146C305.692 146 276.292 129.8 276.292 97.4ZM312.092 49V97.4C312.092 107.8 323.692 112.8 335.092 112.8C346.492 112.8 357.892 107.6 357.892 97.4V49C357.892 38 346.092 33 334.492 33C323.292 33 312.092 38.6 312.092 49ZM454.1 2.4V96.6C454.1 119.4 494.5 119.4 494.7 96.6V2.4H530.9V96.6C530.7 163 417.7 163 417.9 96.6V2.4H454.1ZM661.098 36.2H623.498V144H587.298V36.2H549.698V2.19999H661.098V36.2ZM754.522 2.4V96.6C754.522 119.4 794.922 119.4 795.122 96.6V2.4H831.322V96.6C831.122 163 718.122 163 718.322 96.6V2.4H754.522ZM851.72 120.4L874.32 99.2C888.52 116.4 919.72 117.2 920.72 102C921.12 94 908.12 89.4 896.52 87.8C873.72 84.2 852.92 69.8 852.92 42.8C852.92 15 878.12 0.399989 904.12 0.399989C921.32 0.399989 937.92 5.2 952.52 23L929.12 41C914.32 25.2 888.92 25.8 888.32 42.2C888.72 49 896.12 53 907.12 55.4C932.32 60 957.52 68.8 955.92 103.6C954.72 131 925.92 146 899.92 146C882.92 146 864.92 137.4 851.72 120.4Z" fill="url(#paint0_linear_812_4876)"/><defs><linearGradient id="paint0_linear_812_4876" x1="938.657" y1="150.392" x2="-9.91423" y2="-251.693" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  const titleSvgStroke = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958 163" fill="none"><path d="M82.8 2.4L133.4 144H95L85.8 115.6H48L39.2 144H0.8L50.2 2.4H82.8ZM56 83.8H77.2L67.4 42.4H66.4L56 83.8ZM251.688 45.6C251.488 52 247.288 63.4 237.088 68.6C256.488 78.4 258.888 96.6 257.088 107.4C253.488 130.2 238.088 144 206.688 144H148.888V2.4H205.688C232.688 2.4 252.488 18.6 251.688 45.6ZM184.888 57.8H205.688C223.088 57.8 223.688 32.6 205.688 32.6H184.888V57.8ZM184.888 112.6H205.688C227.288 112.6 226.888 83.6 205.688 83.6H184.888V112.6ZM276.292 97.4V49C276.292 16.4 305.492 0.399989 334.892 0.399989C364.292 0.399989 393.692 16.6 393.692 49V97.4C393.692 129.8 364.492 146 335.092 146C305.692 146 276.292 129.8 276.292 97.4ZM312.092 49V97.4C312.092 107.8 323.692 112.8 335.092 112.8C346.492 112.8 357.892 107.6 357.892 97.4V49C357.892 38 346.092 33 334.492 33C323.292 33 312.092 38.6 312.092 49ZM454.1 2.4V96.6C454.1 119.4 494.5 119.4 494.7 96.6V2.4H530.9V96.6C530.7 163 417.7 163 417.9 96.6V2.4H454.1ZM661.098 36.2H623.498V144H587.298V36.2H549.698V2.19999H661.098V36.2ZM754.522 2.4V96.6C754.522 119.4 794.922 119.4 795.122 96.6V2.4H831.322V96.6C831.122 163 718.122 163 718.322 96.6V2.4H754.522ZM851.72 120.4L874.32 99.2C888.52 116.4 919.72 117.2 920.72 102C921.12 94 908.12 89.4 896.52 87.8C873.72 84.2 852.92 69.8 852.92 42.8C852.92 15 878.12 0.399989 904.12 0.399989C921.32 0.399989 937.92 5.2 952.52 23L929.12 41C914.32 25.2 888.92 25.8 888.32 42.2C888.72 49 896.12 53 907.12 55.4C932.32 60 957.52 68.8 955.92 103.6C954.72 131 925.92 146 899.92 146C882.92 146 864.92 137.4 851.72 120.4Z"/><defs><linearGradient id="paint0_linear_812_4876" x1="938.657" y1="150.392" x2="-9.91423" y2="-251.693" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls disabledLoaderOverlay>
          <Intro
            title='About us'
            titleSvgFill={titleSvgFill}
            titleSvgStroke={titleSvgStroke}
            desc='Harnessing innovation to empower your business'
          />
          <Beginning />
          <Breaking />
          <Mission />
          <Quote />
          <Team />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default About