import styled from 'styled-components/macro'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppStyled>
      <LandingPage />
      <Footer />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  position: relative;
`
