import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { CharacterProfile } from "../../types/CharacterProfile"

export type ListPaneProps = {
  character: CharacterProfile;
}

export default function ListPane ({ character }: ListPaneProps) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/character/${parseInt(character.url.slice(28))}`), [history]);

  return (
    <Tr onClick={handleOnClick}>
      {/* <Link to={`/character/${parseInt(character.url.slice(28))}`} key={character.url}> */}
      <Td percentage="40%">{character.name}</Td>
      <Td percentage="20%">{character.birth_year}</Td>
      <Td percentage="20%">{character.height}</Td>
      <Td percentage="20%">{character.mass}</Td>
      {/* </Link> */}
    </Tr>
  )
}

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    color: var(--official-yellow)
  }
`

export interface TdProps {
  percentage: string;
}

const Td = styled.td<TdProps>`
  text-align: center;
  width: ${props => props.percentage};
  height: 1.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    height: 1rem;
    font-size: 0.8rem;
  }
`