import styled from 'styled-components'
import { motion } from "framer-motion"

export type TextBoxProps = {
  content: string;
}

function TextBox({ content }: TextBoxProps) {
  return (
    <Container>
      <ScriptBox>
        {content}
      </ScriptBox>
    </Container>
  )
}

const Container = styled(motion.div)`
  /* position: absolute; */
  width: 100%;
  /* bottom: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ScriptBox = styled.div`
  background-color: gray;
  width: 100%;
  height: 10rem;
`

export default TextBox