import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainder>
      <Link to="/" style={{height: '75%'}}>
        <img src="/images/logo_white.png" width="auto" height="100%" />
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

  @media (max-width: 768px) {
    height: 60px;
  }
`

export default Header