import { Container } from 'react-bootstrap'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import NavScrollExample from './navbar.tsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <Container fluid>
                {/*<NavScrollExample />*/}
                {/*<div style={{ minWidth: '100vw' }}>*/}
                {/*    <h1 className='text-center'>The Evolution Archive</h1>*/}
                {/*</div>*/}

                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>



            </Container>
        </>
    )
}

export default App
