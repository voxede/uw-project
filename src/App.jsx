import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Grid from './components/Grid/Grid'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Grid type="one-col">
        {isLoggedIn ? (
          <div className="grid-item">
            <HomePage/>
          </div>
        ) : (
          <LoginPage setIsLoggedIn={setIsLoggedIn}/>
        )}
      </Grid>
    </>
  )
}

export default App