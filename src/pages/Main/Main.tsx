import { Link } from "react-router-dom"
import useList from "../../hooks/useList"

export type MainProps = {}

function Main({}: MainProps) {

  const { list, status, onSetPage } = useList();

  if(status === 'pending') {
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
        <div onClick={list.page === 1 ? () => {} : () => onSetPage(list.page - 1)}>prev</div>
        {list.page}
        <div onClick={list.characters.length < 10 ? () => {} : () => onSetPage(list.page + 1)}>next</div>
      </div>
    </div>
  )
}

export default Main