import styled from 'styled-components'
import { motion } from "framer-motion"

export type ListProps = {}

function List({}: ListProps) {
  return (
    <Container>
      List
      {/* {list.characters && list.characters.length !== 0 && list.characters.map( (v: any, index: number) => (
        <Link to={`/character/${parseInt(v.url.slice(28))}`} key={v.url}>
          <div>
            {v.name}
          </div>
        </Link>
      ))}
      <div>
        <div onClick={list.page === 1 ? () => {} : () => onSetPage(list.page - 1)}>prev</div>
        {list.page}
        <div onClick={list.characters.length < 10 ? () => {} : () => onSetPage(list.page + 1)}>next</div>
      </div> */}
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: gray;
  z-index: 10;
`

export default List