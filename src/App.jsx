import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, customCount } from './features/countSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.countAccess)
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} >Decrement</button>
        <button onClick={() => dispatch(customCount(14))}>Set it to 14</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
