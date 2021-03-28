import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { setDialog } from '../modules/dialog';

export default function useDialog() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch = useDispatch();

  const onSetDialog = useCallback((text: string) => { 
    dispatch(setDialog(text));
  }, [dispatch]);

  return {
    dialog,
    onSetDialog,
  };
}