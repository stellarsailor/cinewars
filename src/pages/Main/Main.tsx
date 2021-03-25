import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export type MainProps = {}

function Main({}: MainProps) {

  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)
  const [ list, setList ] = useState<Array<any>>([])
  
  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true)
      let url = `http://swapi.dev/api/people/?page=${page}`;
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setList(data.results)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    initialFetch()
  },[page])

  if(loading) {
    return <div>loading..</div>
  }

  return (
    <div>
      {list.map( (v, index) => (
        <Link to={`/character/${(page-1) * 10 + (index+1)}`}>
          <div onClick={() => console.log( (page-1) * 10 + (index+1) )}>
            {v.name}
          </div>
        </Link>
      ))}
      <div>
        <div onClick={() => setPage(page - 1)}>prev</div>
        <div onClick={() => setPage(page + 1)}>next</div>
      </div>
    </div>
  )
}

export default Main