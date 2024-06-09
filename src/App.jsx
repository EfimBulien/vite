import { useState } from 'react'
import './App.css'
import styles from './App.module.css'

export function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const user = {
    firstName: 'Ivan',
    lastName: 'Novikov'
  }

  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  function inputChange(event) {
    setText(event.target.value)
  }

  return (
    <>
    {/* This is comment */}
    <h1>Добро пожаловать, {formatName(user)}</h1>
      <h3 className={styles.text} htmlFor="">{text}</h3>
      <div className={styles.text}>click on this button</div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <input type="text" onChange={inputChange} />
    </>
  )
}