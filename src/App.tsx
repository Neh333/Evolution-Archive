import { Container } from 'react-bootstrap'
import  './App.css'
import NavBar from './navbar.tsx'

export default function App() {

  return (
      <>
        <Container fluid>
          <div style={{ minWidth: '100vw' }}>
            <div className='homepage-bg'>
              <NavBar />
              <h1 className='text-center'>The Evolution Archive</h1>
            </div>
          </div>
        </Container>
      </> 
  )
}
