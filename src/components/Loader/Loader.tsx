import styled from 'styled-components'

export type LoaderProps = {
  global: boolean
}

function Loader({ global }: LoaderProps) {
  // when global is true, the loader spins on the center of the global web view, 
  // if not, it spins on the center of the parent's div
  if(global){
    return (
      <GlobalContainer>
        <img src="/images/loader.png" width="40px" height="40px" alt="loader indicator" />
      </GlobalContainer>
    )
  }
  return (
    <Container>
      <img src="/images/loader.png" width="40px" height="40px" alt="loader indicator" />
    </Container>
  )
}

const GlobalContainer = styled.div`
  position: fixed;
  top: calc(50% - 20px);
  left: calc(50% - 20px);

  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
  z-index: 10;

  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
  z-index: 10;

  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
`

export default Loader