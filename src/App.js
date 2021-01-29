import styled from 'styled-components/macro'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


export default function App() {
  return (
    <AppStyled>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  position: relative;
`
