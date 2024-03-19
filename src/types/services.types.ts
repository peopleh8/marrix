import { StaticImageData } from 'next/image'

export interface ServicesItemProps {
  title: string
  desc: string
}

export interface ServicesHeroProps {
  title: string
  desc: string
  path: StaticImageData | string
}