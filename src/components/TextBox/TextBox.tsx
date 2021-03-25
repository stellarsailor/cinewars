import styled from 'styled-components'
import { motion } from "framer-motion"
import Typist from 'react-typist'

export type TextBoxProps = {
  content: string;
}

function TextBox({ content }: TextBoxProps) {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <ScriptBox>
        <img src="/images/stormtrooper.png" style={{width: 'auto', height: '15rem', position: 'relative', marginTop: '-5rem'}} />
        <ScriptTextBox 
          key={content} 
          //need key in text span to re-render when content is changed
        >
          <Typist startDelay={1000} cursor={{show: false}}>
            {content}
          </Typist>
        </ScriptTextBox>
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
  border: 1px solid rgba(88, 88, 88, 0.8);
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
`

const ScriptTextBox = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-family: Electrolize;
`

export default TextBox