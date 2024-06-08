import { useState } from 'react'
import './App.css'
import styles from './App.module.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* This is comment */}
      <div className={styles.text}>click on this button</div>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}
