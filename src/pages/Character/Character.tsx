import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { serverUrl } from "../../api/serverUrl"
import CharacterDetail from "../../components/CharacterDetail"
import DialogBox from "../../components/DialogBox"
import Loader from "../../components/Loader"
import useDialog from "../../hooks/useDialog"
import { CharacterProfile } from "../../types/CharacterProfile"
import { composeDialog } from "./composeDialog"

export type CharacterProps = {}

function Character({}: CharacterProps) {

  const params: any = useParams()
  const { dialog, onSetDialog } = useDialog()

  const [ character, setCharacter ] = useState<null | CharacterProfile>(null)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const initialFetch = async () => {
      let url = `${serverUrl}/people/${params.id}`
      setLoading(true)
      try {
        const res = await fetch(url)
        const data = await res.json()

        onSetDialog(composeDialog(data))
        setCharacter(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    initialFetch()
  },[params])

  // it should be loading indicator when character page is being loaded, but due to animation it hinders user experience.
  if(loading) return <Loader global />

  return (
    <Container>
      <CharacterDetail
        id={params.id}
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