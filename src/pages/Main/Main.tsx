import { Row, Col } from "react-grid-system";
import { Link } from "react-router-dom"
import styled from "styled-components";
import List from "../../components/List";
import TextBox from "../../components/TextBox";
import useList from "../../hooks/useList"

export type MainProps = {}

function Main({}: MainProps) {

  const { list, status, onSetPage } = useList();

  if(status === 'pending') {
    return <div>loading..</div>
  }

  return (
    <Container>
      <ListContainer>
        <Row justify="center" nogutter>
          <Col xs={11} sm={11} md={10} lg={8}>
            <List />
          </Col>
        </Row>
      </ListContainer>
      <TextBoxContainer>
        <Row justify="center" nogutter>
          <Col xs={11} sm={11} md={10} lg={8}>
            <TextBox 
              content="string"
            />
          </Col>
        </Row>
      </TextBoxContainer>
    </Container>
  )
}

const Container = styled.div`
  z-index: 10;
`

const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
`

const TextBoxContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  z-index: 10;
`

export default Main