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
              <DetailPane>
                <BackButtonTab>
                  <BackButtonText onClick={() => history.goBack()}> {`<`} Back </BackButtonText>
                </BackButtonTab>
                <Row nogutter>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    {/* TODO: female male divide*/}
                    <PortraitContainer>
                      <ImageWrapper>
                        <img src={`/images/${
                          character.gender === 'male' 
                          ? 'male' 
                          : character.gender === 'female' 
                            ? 'female'
                            : 'etc'
                        }.jpg`} style={{width: 'auto', height: '100%', position: 'relative'}} />
                      </ImageWrapper>
                      <PortraitNameContainer>
                        {character.name}
                      </PortraitNameContainer>
                    </PortraitContainer>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <TabTitle>
                      Height
                    </TabTitle>
                    <TabDescription>
                      {character.height}
                    </TabDescription>
                    <TabTitle>
                      Mass
                    </TabTitle>
                    <TabDescription>
                      {character.mass}
                    </TabDescription>
                    <TabTitle>
                      Birth Date
                    </TabTitle>
                    <TabDescription>
                      {character.birth_year}
                    </TabDescription>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3}>
                    <TabTitle>
                      Hair Color
                    </TabTitle>
                    <TabDescription>
                      {character.hair_color}
                    </TabDescription>
                    <TabTitle>
                      Eye Color
                    </TabTitle>
                    <TabDescription>
                      {character.eye_color}
                    </TabDescription>
                    <TabTitle>
                      Skin Color
                    </TabTitle>
                    <TabDescription>
                      {character.skin_color}
                    </TabDescription>
                  </Col>
                </Row>
              </DetailPane>
            }
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
  min-height: 50vh;
`

const MotionWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(88, 88, 88, 0.8);
  z-index: 10;
`

const DetailPane = styled.div`
  width: 100%;
  height: 100%;
`

const BackButtonTab = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 1rem;
  @media (max-width: 768px) {
    height: 30px;
  }
`

const BackButtonText = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  &:hover {
    color: var(--official-yellow)
  }
  cursor: pointer;
  
`

const PortraitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const PortraitNameContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`

const TabTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
  margin-left: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const TabDescription = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export default CharacterDetail