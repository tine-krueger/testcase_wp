import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components/macro'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <AppStyled>
        <LandingPage />
        <Footer />
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  position: relative;
`
