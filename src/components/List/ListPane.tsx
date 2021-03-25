import { Link } from "react-router-dom"
import styled from "styled-components"
import { CharacterProfile } from "../../types/CharacterProfile"

export type ListPaneProps = {
  character: CharacterProfile;
}

export default function ListPane ({ character }: ListPaneProps) {

  return (
    <Link to={`/character/${parseInt(character.url.slice(28))}`} key={character.url}>
      <PaneContainer>
        {character.name} {character.birth_year} {character.height} {character.mass}
      </PaneContainer>
    </Link>
  )
}

const PaneContainer = styled.div`
  width: 100%;
  height: 2rem;
  color: white;
`