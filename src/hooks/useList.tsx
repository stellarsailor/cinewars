import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { setPage, setStatus, fetchList } from '../modules/list'

export default function useList() {
  const list = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  const onSetPage = useCallback(
    (page: number) => dispatch(setPage(page)), 
    [dispatch]
  );

  const onFetchListBy = useCallback(
    (page: number) => {
      console.log('called')
      dispatch(setStatus('loading'))
      const onFetchFunction = async () => {
        let url = `http://swapi.dev/api/people/?page=${page}`;
        try {
          const res = await fetch(url)
          const data = await res.json()

          dispatch(fetchList(data.results))
          dispatch(setStatus(''))
        } catch (err) {
          console.log(err)
        }
      }
      onFetchFunction()
    },
    [dispatch]
  )

  return {
    list,
    onSetPage,
    onFetchListBy,
  };
}