import { delay } from '@/utils/delay';
import { ReactElement, ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export type ChildType = ReactElement | ReactNode

export enum BlockTitleSizes {
  BIG = 'big',
  SMALL = 'small'
}

export enum BlockTitleTheme {
  DEFAULT = 'default',
  LIGHT = 'light',
  GRADIENT = 'gradient'
}

export enum GlitchTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum SectionsGRBColor {
  LIGHT = 'rgb(255, 255, 255)',
}

export enum ScreenBreakpoint {
  TABLET = 1024,
}

export interface ChildProps {
  children: ChildType
}

export interface PageTitleProps {
  text: string
  titleSvgFill: string
  titleSvgStroke: string
}

export interface SectionTitleProps {
  text: string
  isLight?: boolean
}

export interface BlockTitleProps {
  text: string
  size: BlockTitleSizes
  theme: BlockTitleTheme
  centered?: boolean
}

export interface PageDescProps {
  text: string
}

export interface ActionBtnProps {
  text: string
}

export interface IntroBenefits {
  id: number | string
  title: string
  desc: string
}

export interface IntroSlider {
  id: number | string
  title: string
  path: StaticImageData
  isMobile: boolean
}

export interface IntroProps {
  title: string
  titleSvgFill: string,
  titleSvgStroke: string,
  desc?: string
  benefits?: IntroBenefits[]
  slider?: IntroSlider[]
  isFullpage?: boolean
  isMain?: boolean
}

export interface IntroBenefitsProps {
  benefits: IntroBenefits[]
  desc?: string
}

export interface IntroBenefitsItemProps {
  title: string
  desc: string
}

export interface ArticleProps {
  children: ChildType
  isLight?: boolean
}

export interface BurgerBtnProps {
  text: string
  href?: string
  handler?: () => void
}

export interface FixedControlsProps {
  children: ChildType
  disabledFooter?: boolean
  disabledPortfolio?: boolean
  disabledLoaderOverlay?: boolean
  disabledLoaderLine?: boolean
  disabledCallback?: boolean
}

export interface ActionProps {
  disabledPortfolio?: boolean
}

export interface GlitchProps {
  countItems: number
  countRectangles: number
  widthElement: number
  heightElement: number
  theme: GlitchTheme
  trigger?: boolean
  delay?: number
}

export interface GlitchItemProps {
  countRectangles: number
  widthElement: number
  heightElement: number
  theme: GlitchTheme
  trigger?: boolean
  delay?: number
}

export interface ScrollViewProps {
  children: ChildType
  isMain?: boolean
}