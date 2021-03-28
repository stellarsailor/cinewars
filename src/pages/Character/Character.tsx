import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { fetchChildren } from "../../api/fetchChildren"
import { serverUrl } from "../../api/serverUrl"
import CharacterDetail from "../../components/CharacterDetail"
import DialogBox from "../../components/DialogBox"
import Loader from "../../components/Loader"
import useDialog from "../../hooks/useDialog"
import { CharacterProfile } from "../../types/CharacterProfile"
import { composeDialog } from "./composeDialog"

function Character() {

  const params: any = useParams()
  const { dialog, onSetDialog } = useDialog()

  const [ character, setCharacter ] = useState<null | CharacterProfile>(null)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const initialFetch = async () => {
      if(params === undefined) return
      let url = `${serverUrl}/people/${params.id}`
      setLoading(true)
      try {
        const res = await fetch(url)
        const data = await res.json()
        const characterData = await fetchChildren(data)

        onSetDialog(composeDialog(data))
        setCharacter(characterData)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    initialFetch()
  },[params, onSetDialog])

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