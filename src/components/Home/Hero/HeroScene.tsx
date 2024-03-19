'use client'

import React, { FC, useEffect, useState, useMemo } from 'react'
import gsap from 'gsap'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  type Container,
  type ISourceOptions,
} from '@tsparticles/engine'
import { loadAll } from '@tsparticles/all'
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask'
import styles from '@/components/Home/Hero/Hero.module.scss'

const HeroScene: FC = () => {
  const [ init, setInit ] = useState(false)
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine)
      await loadPolygonMaskPlugin(engine)

    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    gsap.fromTo(`.${styles.scene}`, .7, { opacity: 0 }, { opacity: 1, delay: 6.8 })
  }

  const options: ISourceOptions = useMemo(() => (
    {
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          }
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 1,
            opacity: 8,
            size: 6,
            speed: 3
          }
        }
      },
      particles: {
        color: {
          value: "#fff",
          animation: {
            enable: true,
            speed: 1,
            sync: true
          }
        },
        links: {
          blink: false,
          color: "#fff",
          consent: false,
          distance: 50,
          enable: true,
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: 0.15,
        },
        number: {
          value: 300
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false
          },
          random: false,
          value: { min: 0.05, max: 20 }
        },
        shape: {
          type: "circle"
        },
        size: {
          animation: {
            enable: false,
            speed: 40,
            sync: false
          },
          random: true,
          value: { min: 0.5, max: 2 }
        }
      },
      polygon: {
        draw: {
          enable: true,
          stroke: {
            color: "#fff",
            width: 0.1,
            opacity: 1
          }
        },
        move: {
          radius: 30
        },
        inline: {
          arrangement: "equidistant"
        },
        scale: 1,
        type: "inline",
        url: "/mask.svg"
      }
    }
  ), [])
  
  if (init) {
    return (
      <div className={styles.scene}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    )
  }

  return <></>
}

export default React.memo(HeroScene)