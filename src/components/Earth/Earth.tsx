import styled from 'styled-components'
import { motion } from "framer-motion"

function Earth() {
  return (
      <Container
        initial={{ opacity: 0.8, x: 0, y: 0 }}
        animate={{ opacity: 1, x: '2vw', y: '2vh' }}
        transition={{ delay: 0.2, duration: 5 }}
      >
        <Image />
      </Container>
  )
}

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`

const Image = styled.img.attrs({
  src: '/images/earth.png'
})`
  position: absolute;
  width: 100%;
  height: auto;
`

export default Earth