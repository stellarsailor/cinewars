import { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { serverUrl } from "../../api/serverUrl"
import { CharacterProfile } from "../../types/CharacterProfile"

export type CharacterProps = {}

function Character({}: CharacterProps) {
  let params: any = useParams()
  const history = useHistory()

  const [ character, setCharacter ] = useState<null | CharacterProfile>(null)

  useEffect(() => {
    const initialFetch = async () => {
      let url = `${serverUrl}/people/${params.id}`
      try {
        const res = await fetch(url)
        const data = await res.json()
  
        setCharacter(data)
      } catch (err) {
        console.log(err)
      }
    }

    initialFetch()
  },[params])

  return (
    <div>
      {character && 
        <div>
          {character.name} {character.height}
        </div>}
      <div onClick={() => history.goBack()}>Back</div>
    </div>
  )
}

export default Character