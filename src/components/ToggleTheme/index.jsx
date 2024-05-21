import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

import styles from './Toggle.module.scss'

function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={styles.toggleWrapper}>
      <input type="checkbox" className="dn" id="dn" checked={theme === 'dark'} onChange={toggleTheme} />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggle__handler}>
          <span className={`${styles.crater} ${styles['crater--1']}`}></span>
          <span className={`${styles.crater} ${styles['crater--2']}`}></span>
          <span className={`${styles.crater} ${styles['crater--3']}`}></span>
        </span>

        <span className={`${styles.star} ${styles['star--1']}`}></span>
        <span className={`${styles.star} ${styles['star--2']}`}></span>
        <span className={`${styles.star} ${styles['star--3']}`}></span>
        <span className={`${styles.star} ${styles['star--4']}`}></span>
        <span className={`${styles.star} ${styles['star--5']}`}></span>
        <span className={`${styles.star} ${styles['star--6']}`}></span>
      </label>
    </div>
  )
}

export default Toggle
