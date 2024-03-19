'use client'

import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import FixedControls from '@/components/FixedControls/FixedControls'
import Intro from '@/components/Intro/Intro'
import Posts from '@/components/Blog/Posts/Posts'
import Quote from '@/components/Blog/Quote/Quote'

const Blog: FC = () => {
  const titleSvgFill = '<svg viewBox="0 0 491 146" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M103 45.6C102.8 52 98.6 63.4 88.4 68.6C107.8 78.4 110.2 96.6 108.4 107.4C104.8 130.2 89.4 144 58 144H0.2V2.4H57C84 2.4 103.8 18.6 103 45.6ZM36.2 57.8H57C74.4 57.8 75 32.6 57 32.6H36.2V57.8ZM36.2 112.6H57C78.6 112.6 78.2 83.6 57 83.6H36.2V112.6ZM131.005 144V2.4H167.005V108.6H224.605V144H131.005ZM240.05 97.4V49C240.05 16.4 269.25 0.399989 298.65 0.399989C328.05 0.399989 357.45 16.6 357.45 49V97.4C357.45 129.8 328.25 146 298.85 146C269.45 146 240.05 129.8 240.05 97.4ZM275.85 49V97.4C275.85 107.8 287.45 112.8 298.85 112.8C310.25 112.8 321.65 107.6 321.65 97.4V49C321.65 38 309.85 33 298.25 33C287.05 33 275.85 38.6 275.85 49ZM484.258 30.6L454.258 44.4C446.458 25.4 414.858 29.8 414.858 48.4V97C414.858 119.2 456.258 119 456.258 97V91.8H433.658V61.8H490.658V97C490.658 129.6 463.458 146 435.058 146C407.058 146 379.058 129.6 379.058 97V48.4C379.058 16.4 407.058 0.399989 435.058 0.399989C453.458 0.399989 474.458 8 484.258 30.6Z" fill="url(#paint0_linear_812_5495)"/><defs><linearGradient id="paint0_linear_812_5495" x1="481.109" y1="150.392" x2="-79.0246" y2="25.6479" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  const titleSvgStroke = '<svg viewBox="0 0 491 146" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M103 45.6C102.8 52 98.6 63.4 88.4 68.6C107.8 78.4 110.2 96.6 108.4 107.4C104.8 130.2 89.4 144 58 144H0.2V2.4H57C84 2.4 103.8 18.6 103 45.6ZM36.2 57.8H57C74.4 57.8 75 32.6 57 32.6H36.2V57.8ZM36.2 112.6H57C78.6 112.6 78.2 83.6 57 83.6H36.2V112.6ZM131.005 144V2.4H167.005V108.6H224.605V144H131.005ZM240.05 97.4V49C240.05 16.4 269.25 0.399989 298.65 0.399989C328.05 0.399989 357.45 16.6 357.45 49V97.4C357.45 129.8 328.25 146 298.85 146C269.45 146 240.05 129.8 240.05 97.4ZM275.85 49V97.4C275.85 107.8 287.45 112.8 298.85 112.8C310.25 112.8 321.65 107.6 321.65 97.4V49C321.65 38 309.85 33 298.25 33C287.05 33 275.85 38.6 275.85 49ZM484.258 30.6L454.258 44.4C446.458 25.4 414.858 29.8 414.858 48.4V97C414.858 119.2 456.258 119 456.258 97V91.8H433.658V61.8H490.658V97C490.658 129.6 463.458 146 435.058 146C407.058 146 379.058 129.6 379.058 97V48.4C379.058 16.4 407.058 0.399989 435.058 0.399989C453.458 0.399989 474.458 8 484.258 30.6Z"/><defs><linearGradient id="paint0_linear_812_5495" x1="481.109" y1="150.392" x2="-79.0246" y2="25.6479" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls disabledLoaderOverlay>
          <Intro
            title='Blog'
            titleSvgFill={titleSvgFill}
            titleSvgStroke={titleSvgStroke}
            desc='Opening New Horizons for You with Creative Solutions in Our Blog'
          />
          <Posts />
          <Quote />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default Blog