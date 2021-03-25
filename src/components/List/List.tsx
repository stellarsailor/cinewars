import { Row, Col } from "react-grid-system";
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import ListPane from './ListPane'
import { CharacterProfile } from '../../types/CharacterProfile'

export type ListProps = {
  list: {page: number; characters: null | Array<CharacterProfile>};
  status: 'idle' | 'pending' | 'error';
  onSetPage: (page: number) => void;
}

function List({
  list,
  status,
  onSetPage
}: ListProps) {

  return (
    <ListContainer>
      <Row justify="center" nogutter>
        <Col xs={11} sm={11} md={10} lg={8}>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {
              status === 'pending' 
              ?
                <Loader />
              :
              <>
                {list.characters && list.characters.length !== 0 && list.characters.map( (v: CharacterProfile, index: number) => (
                  <ListPane character={v} key={index} />
                ))}
                <PaginationContainer>
                  <PaginationButton onClick={list.page === 1 ? () => {} : () => onSetPage(list.page - 1)}>
                    prev
                  </PaginationButton>
                  <PaginationNumber>
                    {list.page}
                  </PaginationNumber>
                  <PaginationButton onClick={list.characters && list.characters.length < 10 ? () => {} : () => onSetPage(list.page + 1)}>
                    next
                  </PaginationButton>
                </PaginationContainer>
              </>
            }
          </MotionWrapper>
        </Col>
      </Row>
    </ListContainer>
  )
}

const ListContainer = styled.div`
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

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaginationNumber = styled.span`
  margin: 0px 1rem;
`

const PaginationButton = styled.span`
  cursor: pointer;
  &:hover{
    color: var(--official-yellow);
  }
`

export default List