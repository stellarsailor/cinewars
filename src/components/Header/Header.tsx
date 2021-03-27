import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MusicPlayer from '../MusicPlayer'

function Header() {
  return (
    <HeaderContainder>
      <MusicPlayer />
      <Link to="/" style={{height: '75%'}}>
        <img src="/images/logo_white.png" width="auto" height="100%" alt="main logo" />
      </Link>
      <a href="https://github.com/stellarsailor/cinewars" target="_blank" rel="noreferrer">
        <GithubLogoContainer>
          <img src="/images/logo_github.png" width="100%" height="100%" alt="github logo" />
        </GithubLogoContainer>
      </a>
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

const GithubLogoContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.75;
  cursor: pointer;
  z-index: 30;

  &:hover{
    opacity: 1;
  }

  @media (max-width: 768px) {
    top: 1.25rem;
    right: 1.25rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export default Header