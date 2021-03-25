import { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { setPage, setCharacters } from '../modules/list'

export default function useList() {
  const list = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();
  
  const [ status, setStatus ] = useState<'idle' | 'pending' | 'error'>('idle')

  const onFetch = useCallback( async (page: number) => {
    setStatus('pending')
    let url = `http://swapi.dev/api/people/?page=${page}`;
    try {
      const res = await fetch(url)
      const data = await res.json()

      dispatch(setCharacters(data.results))
      setStatus('idle')
    } catch (err) {
      setStatus('error')
    }
  }, [dispatch])

  const onSetPage = useCallback(
    (page: number) => { 
      onFetch(page)
      dispatch(setPage(page));
    },
    [dispatch, onFetch, list]
  );

  const initialFetch = useCallback(
    (page: number) => {
      onFetch(page)
    },
    [onFetch]
  )

  return {
    list,
    status,
    onSetPage,
    initialFetch,
  };
}