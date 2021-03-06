import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CharacterProfile } from '../../types/CharacterProfile';

export type ListPaneProps = {
  character: CharacterProfile;
};

export default function ListPane({ character }: ListPaneProps) {
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    history.push(`/character/${parseInt(character.url.slice(29))}`);
  }, [history, character]);

  return (
    <Tr onClick={handleOnClick}>
      <Td percentage='34%'>{character.name}</Td>
      <Td percentage='22%'>{character.birth_year}</Td>
      <Td percentage='22%'>{character.height}</Td>
      <Td percentage='22%'>{character.mass}</Td>
    </Tr>
  );
}

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    color: var(--official-yellow);
  }
`;

export interface TdProps {
  percentage: string;
}

const Td = styled.td<TdProps>`
  text-align: center;
  width: ${(props) => props.percentage};
  height: 3vh;
  font-size: 1rem;

  @media (max-width: 768px) {
    height: 3vh;
    font-size: 0.75rem;
  }
`;
