import { useState } from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Row, Col } from "react-grid-system";
import { CharacterProfile } from '../../types/CharacterProfile';
import { useHistory } from 'react-router';
import { Species } from '../../types/Species';
import { Vehicles } from '../../types/Vehicles';
import { Starships } from '../../types/Starships';

export type CharacterDetailProps = {
  id: number,
  character: null | CharacterProfile,
}

function CharacterDetail({ 
  id,
  character
}: CharacterDetailProps) {

  const history = useHistory()
  const [ imageLoading, setImageLoading ] = useState<boolean>(true)

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
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <PortraitContainer>
                      <ImageWrapper>
                        { imageLoading && <ImageSkeleton /> }
                        <img 
                          src={`/images/characters/${id}.jpg`} 
                          style={{width: 'auto', height: '100%', position: 'relative'}} 
                          onLoad={() => setImageLoading(false)} 
                          onError={(e) => console.log(e)}
                          alt="character's portrait"
                        />
                      </ImageWrapper>
                      <PortraitNameContainer>
                        {character.name}
                      </PortraitNameContainer>
                      <PortraitFilmsContainer>
                        { character.filmsData && (
                          // randomly select only one film to show.
                          <>
                            from '{character.filmsData[Math.floor(Math.random() * character.filmsData.length)].title}'
                          </>
                        )}
                      </PortraitFilmsContainer>
                    </PortraitContainer>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={8}>
                    <Row nogutter>
                      <Col xs={4} sm={4} md={4} lg={4}>
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
                      <Col xs={4} sm={4} md={4} lg={4}>
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
                      <Col xs={4} sm={4} md={4} lg={4}>
                        <TabTitle>
                          Species
                        </TabTitle>
                        {character.speciesData && character.speciesData.length === 0 ?
                          <TabDescription>
                            Human
                          </TabDescription>
                        :
                          character.speciesData!.map((v: Species) => (
                            <TabDescription key={v.url}>
                              {v.name}
                            </TabDescription>
                        ))}
                        <TabTitle>
                          Home World
                        </TabTitle>
                        {character.homeworld === '' ?
                          <TabDescription>
                            unknown
                          </TabDescription>
                        :
                          <TabDescription>
                            {character.homeworldData.name}
                          </TabDescription>
                        }
                      </Col>
                    </Row>
                    <Row nogutter>
                      <Col xs={12} sm={12} md={12} lg={12}>
                        <TabTitle>
                          Starships
                        </TabTitle>
                        <TabDescription>
                          {character.starshipsData && character.starshipsData.length === 0 ?
                              <span> none </span>
                            : character.starshipsData && character.starshipsData.map((v: Starships) => (
                              <span key={v.url}> {v.name} </span>
                          ))}
                        </TabDescription>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12}>
                        <TabTitle>
                          Vehicles
                        </TabTitle>
                        <TabDescription>
                          {character.vehiclesData && character.vehiclesData.length === 0 ?
                              <span> none </span>
                            : character.vehiclesData && character.vehiclesData.map((v: Vehicles) => (
                              <span key={v.url}> {v.name} </span>
                          ))}
                        </TabDescription>
                      </Col>
                    </Row>
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
  width: 100%;
  min-height: 50vh;
`

const MotionWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: rgba(0, 0, 0, 0.66);
  border: 1px solid rgba(88, 88, 88, 0.66);
  z-index: 10;
`

const DetailPane = styled.div`
  width: 100%;
  height: 100%;
`

const BackButtonTab = styled.div`
  width: 100%;
  height: 3.2rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    height: 1.6rem;
  }
`

const BackButtonText = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
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
  width: 150px;
  height: 150px;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const ImageSkeleton = styled.div`
  background-color: gray;
  width: auto;
  height: 100%;
  position: relative;
`

const PortraitNameContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`

const PortraitFilmsContainer = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: 0rem;
  }
`

const TabTitle = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: gray;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: 0.4rem;
  }
`

const TabDescription = styled.span`
  margin-left: 1rem;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export default CharacterDetail