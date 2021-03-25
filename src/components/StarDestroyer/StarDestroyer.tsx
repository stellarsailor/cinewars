import styled from 'styled-components'
import { motion } from "framer-motion"

function StarDestroyer() {
  return (
      <Container
        initial={{ opacity: 0.8, x: '50vw', y: '50vh' }}
        animate={{ opacity: 1, x: '30vw', y: '30vh' }}
        transition={{ delay: 0.2, duration: 5 }}
      >
        <Image />
      </Container>
  )
}

const Container = styled(motion.div)`
  bottom: 0;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

const Image = styled.img.attrs({
  src: '/images/stardestroyer.png'
})`
  position: absolute;
  width: 100%;
  height: auto;
`

export default StarDestroyer