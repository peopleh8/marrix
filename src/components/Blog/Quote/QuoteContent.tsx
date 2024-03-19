import { FC } from 'react'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'
import { uniSans } from '@/fonts/fonts'
import styles from '@/components/Blog/Quote/Quote.module.scss'

const QuoteContent: FC = () => {
  const titleSvgFill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 146" fill="none"><path d="M55.6 146H52.8C20.4 146 2.38419e-07 130 2.38419e-07 101.4C2.38419e-07 90.2 6.4 77.8 19 68.4C9.6 62.2 6.6 51.4 6.6 43C6.6 10 34.8 0.399989 52.8 0.399989H55.6C79 0.399989 101.8 12.8 101.8 44.4C101.8 50.6 97.8 62.6 89.6 68.2C102.6 74.8 108.2 89.6 108 99.4C107.4 128.4 90.6 146 55.6 146ZM55.8 29.6H52.8C34.4 30 34.6 57.6 54 57.6C76 57.6 74.4 30.8 55.8 29.6ZM52.6 112.6H56C80 112.6 77 80.4 56.6 82.2H52C32.2 81.6 29 112 52.6 112.6ZM117.122 120.4L140.322 99C145.522 107.4 154.722 111 163.122 111C172.722 111 180.922 106.4 180.922 98.8C180.922 91.6 175.722 85.2 165.522 85.2H143.522V56.6H164.722C173.922 56.6 177.122 45.2 173.122 39.2C166.722 29.2 149.322 31.8 140.522 41.8L119.722 23.4C131.322 9 148.322 0.399989 164.322 0.399989C181.722 0.399989 199.322 6.4 206.922 25.2C212.522 39.2 211.322 59.4 196.922 68.4C211.322 75.8 215.922 90.6 215.922 101.6C215.922 129.2 190.522 146 164.522 146C146.322 146 127.722 138.2 117.122 120.4ZM327.53 26.6L302.53 41C298.13 34 290.33 31 282.93 31C273.33 31 264.33 36.2 264.33 45.2V59.8C291.53 40.4 334.13 57.8 334.13 93V101.4C334.13 130.6 308.93 146 282.53 146C256.13 146 230.13 130.8 230.13 101.4V45C230.13 16.6 256.73 0.399989 282.93 0.399989C301.53 0.399989 318.93 8.79999 327.53 26.6ZM299.93 102.6V92C299.93 77 264.33 77.2 264.33 92V102.6C264.33 118.6 299.93 118.8 299.93 102.6Z" fill="url(#paint0_linear_129_34)"/><defs><linearGradient id="paint0_linear_129_34" x1="223.022" y1="0.999999" x2="212.357" y2="162.613" gradientUnits="userSpaceOnUse"><stop stop-color="#08719F"/><stop offset="1" stop-color="#01DFFF"/></linearGradient></defs></svg>'
  const titleSvgStroke = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 146" fill="none"><path d="M55.6 146H52.8C20.4 146 2.38419e-07 130 2.38419e-07 101.4C2.38419e-07 90.2 6.4 77.8 19 68.4C9.6 62.2 6.6 51.4 6.6 43C6.6 10 34.8 0.399989 52.8 0.399989H55.6C79 0.399989 101.8 12.8 101.8 44.4C101.8 50.6 97.8 62.6 89.6 68.2C102.6 74.8 108.2 89.6 108 99.4C107.4 128.4 90.6 146 55.6 146ZM55.8 29.6H52.8C34.4 30 34.6 57.6 54 57.6C76 57.6 74.4 30.8 55.8 29.6ZM52.6 112.6H56C80 112.6 77 80.4 56.6 82.2H52C32.2 81.6 29 112 52.6 112.6ZM117.122 120.4L140.322 99C145.522 107.4 154.722 111 163.122 111C172.722 111 180.922 106.4 180.922 98.8C180.922 91.6 175.722 85.2 165.522 85.2H143.522V56.6H164.722C173.922 56.6 177.122 45.2 173.122 39.2C166.722 29.2 149.322 31.8 140.522 41.8L119.722 23.4C131.322 9 148.322 0.399989 164.322 0.399989C181.722 0.399989 199.322 6.4 206.922 25.2C212.522 39.2 211.322 59.4 196.922 68.4C211.322 75.8 215.922 90.6 215.922 101.6C215.922 129.2 190.522 146 164.522 146C146.322 146 127.722 138.2 117.122 120.4ZM327.53 26.6L302.53 41C298.13 34 290.33 31 282.93 31C273.33 31 264.33 36.2 264.33 45.2V59.8C291.53 40.4 334.13 57.8 334.13 93V101.4C334.13 130.6 308.93 146 282.53 146C256.13 146 230.13 130.8 230.13 101.4V45C230.13 16.6 256.73 0.399989 282.93 0.399989C301.53 0.399989 318.93 8.79999 327.53 26.6ZM299.93 102.6V92C299.93 77 264.33 77.2 264.33 92V102.6C264.33 118.6 299.93 118.8 299.93 102.6Z"/><defs><linearGradient id="paint0_linear_129_34" x1="223.022" y1="0.999999" x2="212.357" y2="162.613" gradientUnits="userSpaceOnUse"><stop stop-color="#08719F"/><stop offset="1" stop-color="#01DFFF"/></linearGradient></defs></svg>'
  
  return (
    <div className={styles.content}>
      <div className={`${styles.title} ${uniSans.className}`}>
        <div className={styles.titleTxt}>836</div>
        <div className={styles.titleSvg}>
          <div className={`${styles.titleSvgItem} ${styles.titleSvgItemFill}`} dangerouslySetInnerHTML={{ __html: titleSvgFill }} />
          <div className={`${styles.titleSvgItem} ${styles.titleSvgItemStroke}`} dangerouslySetInnerHTML={{ __html: titleSvgStroke }} />
        </div>
      </div>
      <div className={styles.controls}>
        <p className={styles.desc}>Online Entrepreneurs Enjoy Educational Course from Founder of Marrix Power</p>
        <div className={styles.label}>You can be next!</div>
        <ActionBtn text='Get access now' />
      </div>
    </div>
  )
}

export default QuoteContent