import styled from 'styled-components'
import { motion } from "framer-motion"

export type LoaderProps = {}

function Loader({}: LoaderProps) {
  return (
    <Container>
      <img src="/images/loader.png" />
    </Container>
  )
}

const Container = styled.div`
   position: fixed;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
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