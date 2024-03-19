'use client'

import { ChangeEvent, FC, useState } from 'react'
import classNames from 'classnames'
import BurgerBtn from '@/components/UI/BurgerBtn/BurgerBtn'
import { uniSans } from '@/fonts/fonts'
import { useTypedSelector } from '@/hooks/use-types-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import styles from '@/components/Callback/Callback.module.scss'
import { setOpen } from '@/store/reducers/callback.slice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormValues } from '@/types/forms.types'

const Callback: FC = () => {
  const dispatch = useTypedDispatch()
  const { isOpen } = useTypedSelector(state => state.callback)
  const [ fileName, setFileName ] = useState('')

  const openClass = isOpen && styles.open
  const classes = classNames(styles.callback, openClass)

  const { 
    register, 
    handleSubmit,
    reset, 
    control,
    formState: { errors } 
  } = useForm<FormValues>()

  const closeCallbackHandler = () => {
    dispatch(setOpen(false))
  }

  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const name = e.target.files[0].name

      setFileName(name)
    }
  }

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  
  return (
    <div className={classes}>
      <div 
        className={styles.times}
        onClick={closeCallbackHandler}
      >
        <span className={styles.timesLine} />
        <span className={styles.timesLine} />
      </div>
      <form 
        className={styles.form}
        autoComplete='off'
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={styles.fields}>
          <div className={styles.field}>
            <label 
              className={styles.label}
              htmlFor='callback-name'
            >
              Name
            </label>
            <div className={styles.inpWrapper}>
              <input 
                className={`${styles.inp} ${uniSans.className}`}
                id='callback-name'
                type="text"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 3,
                    message: 'Too short name'
                  },
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,
                    message: 'Name is invalid'
                  },
                })}
              />
              <span className={styles.highlight} />
              <span 
                className={`${styles.error} ${uniSans.className} ${errors?.name?.message ? styles.errorVisible : ''}`}
              >
                {errors?.name?.message}
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label 
              className={styles.label}
              htmlFor='callback-phone'
            >
              Phone
            </label>
            <div className={styles.inpWrapper}>
              <input 
                className={`${styles.inp} ${uniSans.className}`}
                id='callback-phone'
                type="tel"
                {...register('phone', {
                  required: 'Phone is required',
                  minLength: {
                    value: 8,
                    message: 'To short phone'
                  },
                  pattern: {
                    value: /^[+\d]{8,}$/,
                    message: 'Phone is invalid'
                  },
                })}
              />
              <span className={styles.highlight} />
              <span 
                className={`${styles.error} ${uniSans.className} ${errors?.phone?.message ? styles.errorVisible : ''}`}
              >
                {errors?.phone?.message}
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label 
              className={styles.label}
              htmlFor='callback-email'
            >
              E-mail
            </label>
            <div className={styles.inpWrapper}>
              <input 
                className={`${styles.inp} ${uniSans.className}`}
                id='callback-email'
                type="text"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Email is invalid'
                  },
                })}
              />
              <span className={styles.highlight} />
              <span 
                className={`${styles.error} ${uniSans.className} ${errors?.email?.message ? styles.errorVisible : ''}`}
              >
                {errors?.email?.message}
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label 
              className={styles.label}
              htmlFor='callback-budget'
            >
              Budget
            </label>
            <div className={styles.inpWrapper}>
              <input 
                className={`${styles.inp} ${uniSans.className}`}
                id='callback-budget'
                type="text"
                {...register('budget', {
                  required: 'Budget is required',
                  pattern: {
                    value: /^\d+$/,
                    message: 'Budget is invalid'
                  },
                })}
              />
              <span className={styles.highlight} />
              <span 
                className={`${styles.error} ${uniSans.className} ${errors?.budget?.message ? styles.errorVisible : ''}`}
              >
                {errors?.budget?.message}
              </span>
            </div>
          </div>
          <div className={styles.field}>
            <label 
              className={styles.label}
              htmlFor='callback-message'
            >
              How can we help you
            </label>
            <div className={styles.inpWrapper}>
              <textarea 
                className={`${styles.inp} ${uniSans.className}`}
                id='callback-message'
                {...register('message', {
                  required: false,
                  minLength: {
                    value: 8,
                    message: 'To short message'
                  },
                })}
              />
              <span className={styles.highlight} />
              <span 
                className={`${styles.error} ${uniSans.className} ${errors?.message?.message ? styles.errorVisible : ''}`}
              >
                {errors?.message?.message}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <BurgerBtn text='SEND A REQUEST' />
          <div className={styles.file}>
            <input 
              className={styles.fileInp}
              id='callback-file'
              type='file'
              {...register('file', {
                required: false,
                onChange: changeFileHandler
              })}
            />
            <label 
              className={styles.fileLabel}
              htmlFor='callback-file'
            >
              <div className={styles.fileIcon}>
                <span className={styles.fileIconLine} />
                <span className={styles.fileIconLine} />
              </div>
              <div className={`${`${styles.fileText} ${uniSans.className}`} roll-btn`}>
                <span>Attach file</span>
                <span>Attach file</span>
              </div>
            </label>
            <span className={`${styles.fileName} ${uniSans.className} ${fileName !== '' ? styles.fileNameVisible : ''}`}>
              {fileName}
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Callback