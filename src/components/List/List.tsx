import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loader from '../Loader';
import ListPane from './ListPane';
import { CharacterProfile } from '../../types/CharacterProfile';

export type ListProps = {
  list: {
    page: number;
    characters: null | Array<CharacterProfile>;
  };
  status: 'idle' | 'pending' | 'error';
  onSetPage: (page: number) => void;
};

function List({ list, status, onSetPage }: ListProps) {
  return (
    <ListContainer>
      <Row justify='center' nogutter>
        <Col xs={11} sm={11} md={10} lg={8}>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {status === 'pending' ? (
              <Loader global={false} />
            ) : (
              <Container>
                <table>
                  <thead>
                    <tr>
                      <Th>Name</Th>
                      <Th>Birth</Th>
                      <Th>Height</Th>
                      <Th>Mass</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.characters &&
                      list.characters.length !== 0 &&
                      list.characters.map(
                        (v: CharacterProfile, index: number) => (
                          <ListPane character={v} key={index} />
                        )
                      )}
                  </tbody>
                </table>
                <PaginationContainer>
                  <PaginationButton
                    onClick={() => {
                      if (list.page === 1) return;
                      onSetPage(list.page - 1);
                    }}
                    disabled={list.page === 1}
                  >
                    {`<`} Prev
                  </PaginationButton>
                  <PaginationNumber>{list.page}</PaginationNumber>
                  <PaginationButton
                    onClick={() => {
                      //list.characters.length !== 0 for the testing case (when there is no data at the initial page)
                      if (
                        list.characters &&
                        list.characters.length !== 0 &&
                        list.characters.length < 10
                      )
                        return;
                      onSetPage(list.page + 1);
                    }}
                    disabled={list.characters && list.characters.length < 10}
                  >
                    Next {`>`}
                  </PaginationButton>
                </PaginationContainer>
              </Container>
            )}
          </MotionWrapper>
        </Col>
      </Row>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
`;

const MotionWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.66);
  border: 1px solid rgba(88, 88, 88, 0.66);
  z-index: 10;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const PaginationContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const PaginationNumber = styled.span`
  margin: 0px 1rem;
  font-weight: bold;
  color: var(--official-yellow);
`;

export interface PaginationButtonProps {
  disabled: null | boolean;
}

const PaginationButton = styled.span<PaginationButtonProps>`
  cursor: ${(props) => (props.disabled ? null : 'pointer')};
  color: ${(props) => (props.disabled ? 'gray' : 'white')};
  &:hover {
    color: ${(props) => (props.disabled ? null : 'var(--official-yellow)')};
  }
`;

const Th = styled.th`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default List;
