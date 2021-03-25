import styled from 'styled-components'
import { motion } from "framer-motion"
import { Row, Col } from "react-grid-system";
import { CharacterProfile } from '../../types/CharacterProfile';
import { useHistory } from 'react-router';

export type CharacterDetailProps = {
  character: null | CharacterProfile
}

function CharacterDetail({ character }: CharacterDetailProps) {
  const history = useHistory()

  return (
    <DetailContainer>
      <Row justify="center" nogutter>
        <Col xs={11} sm={11} md={10} lg={8}>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            { character && 
              <div>
                {character.name} {character.height}
              </div>
            }
            <div onClick={() => history.goBack()}>Back</div>
          </MotionWrapper>
        </Col>
      </Row>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  position: absolute;
  //background-color: green; TODO:
  width: 100%;
  height: 50vh;
`

const MotionWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(88, 88, 88, 0.8);
  z-index: 10;
`

export default CharacterDetail