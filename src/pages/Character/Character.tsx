import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { serverUrl } from "../../api/serverUrl"
import CharacterDetail from "../../components/CharacterDetail"
import DialogBox from "../../components/DialogBox"
import useDialog from "../../hooks/useDialog"
import { CharacterProfile } from "../../types/CharacterProfile"

export type CharacterProps = {}

function Character({}: CharacterProps) {

  const params: any = useParams()
  const { dialog, onSetDialog } = useDialog();

  const [ character, setCharacter ] = useState<null | CharacterProfile>(null)

  useEffect(() => {
    const initialFetch = async () => {
      let url = `${serverUrl}/people/${params.id}`
      try {
        const res = await fetch(url)
        const data = await res.json()
  
        onSetDialog('His/her name is ' + data.name + ' and ...')
        setCharacter(data)
      } catch (err) {
        console.log(err)
      }
    }

    initialFetch()
  },[params])

  return (
    <Container>
      <CharacterDetail
        character={character}
      />
      <DialogBox
        content={dialog.text}
      />
    </Container>
  )
}

const Container = styled.div`
  z-index: 10;
`

export default Character