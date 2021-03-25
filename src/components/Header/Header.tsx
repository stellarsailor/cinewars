import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainder>
      <Link to="/">
        <img src="/images/logo_white.png" width="auto" height="80px" />
      </Link>
    </HeaderContainder>
  )
}

const HeaderContainder = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header