import { StaticImageData } from 'next/image'

export interface TechListProps {
  isSuptitleVisible: boolean
}

export interface TechQuoteProps {
  isSuptitleVisible: boolean
}

export interface TechItemProps {
  path: StaticImageData
  title: string
}