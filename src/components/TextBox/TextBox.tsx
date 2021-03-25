import styled from 'styled-components'
import { motion } from "framer-motion"

export type TextBoxProps = {
  content: string;
}

function TextBox({ content }: TextBoxProps) {
  return (
    <Container>
      <ScriptBox>
        <img src="/images/stormtrooper.png" style={{width: 'auto', height: '15rem', position: 'absolute', left: 0, bottom: 0}} />
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
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 10rem;
`

export default TextBox