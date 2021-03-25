import styled from 'styled-components'
import { Container, Row } from 'react-grid-system';
import Header from '../Header';
import StarDestroyer from '../StarDestroyer';

export type AppLayoutProps = {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container fluid style={{padding: 0}}>
      <BackgroundContainer>
        <Header />
        {children}
        <StarDestroyer />
      </BackgroundContainer>
    </Container>
  )
}

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: ${props => `url(/images/background_1080.jpg)`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
