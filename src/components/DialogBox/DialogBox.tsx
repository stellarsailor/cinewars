import styled from 'styled-components'
import { motion } from "framer-motion"
import { Row, Col } from "react-grid-system";
import Typist from 'react-typist'
import useDialog from '../../hooks/useDialog';
import ReactHtmlParser from 'react-html-parser';

export type DialogBoxProps = {
  content: string;
}

function DialogBox({ content }: DialogBoxProps) {

  const { onSetDialog } = useDialog();

  return (
    <TextBoxContainer>
      <Row justify="center" nogutter>
        <Col xs={11} sm={11} md={10} lg={8}>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ScriptBox>
              <ImageWrapper onClick={() => onSetDialog("D...Do not touch me, sir.")}>
                <img src="/images/stormtrooper.png" style={{width: 'auto', height: '100%', position: 'relative'}} />
              </ImageWrapper>
              <ScriptTextBox 
                key={content} 
                //need key in text span to re-render when content is changed
              >
                <Typist startDelay={1000} cursor={{show: false}}>
                  {ReactHtmlParser(content)}
                </Typist>
              </ScriptTextBox>
            </ScriptBox>
          </MotionWrapper>
        </Col>
      </Row>
    </TextBoxContainer>
  )
}

const TextBoxContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 4rem;
  }
`

const MotionWrapper = styled(motion.div)`
  /* position: absolute; */
  width: 100%;
  /* bottom: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ImageWrapper = styled.div`
  height: 15rem;
  margin-top: -5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 8rem;
    margin-top: -2rem;
  }
`

const ScriptBox = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(88, 88, 88, 0.8);
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    height: 6rem;
  }
`

const ScriptTextBox = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-family: Electrolize;

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`

export default DialogBox