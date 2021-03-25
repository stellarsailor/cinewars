import { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'

export type CharacterProps = {}

function Character({}: CharacterProps) {
  let params: any = useParams()
  const history = useHistory()

  const [ character, setCharacter ] = useState<any>(null)

  useEffect(() => {
    const initialFetch = async () => {
      let url = `https://swapi.dev/api/people/${params.id}`
      try {
        const res = await fetch(url)
        const data = await res.json()
  
        setCharacter(data)
      } catch (error) {
        
      }
    }

    initialFetch()
  },[])

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