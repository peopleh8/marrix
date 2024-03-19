import { StaticImageData } from 'next/image'
import { int } from 'three/examples/jsm/nodes/Nodes.js'

export interface PostItemProps {
  time: string
  date: string
  title: string
}

export interface RelatedItemProps {
  path: StaticImageData
  title: string
}

export interface PostHeaderProps {
  isMobile: boolean
}