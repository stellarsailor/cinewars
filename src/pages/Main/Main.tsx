import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useList from "../../hooks/useList"

export type MainProps = {}

function Main({}: MainProps) {

  const { list, onSetPage, onFetchListBy } = useList();
  
  useEffect(() => {
    onFetchListBy(list.page)
  },[list.page, onFetchListBy])

  if(list.status === 'loading') {
    return <div>loading..</div>
  }

  return (
    <div>
      {list.characters && list.characters.length !== 0 && list.characters.map( (v: any, index: number) => (
        <Link to={`/character/${parseInt(v.url.slice(28))}`} key={v.url}>
          <div>
            {v.name}
          </div>
        </Link>
      ))}
      <div>
        <div onClick={() => onSetPage(list.page - 1)}>prev</div>
        {list.page}
        <div onClick={() => onSetPage(list.page + 1)}>next</div>
      </div>
    </div>
  )
}

export default Main