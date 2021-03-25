// Action types - with const assertions
const SET_PAGE = 'list/NEXT_PAGE' as const;
const SET_STATUS = 'list/SET_STATUS' as const;
const FETCH_LIST = 'list/FETCH_LIST_BY' as const;

// Actions
export const setPage = (page: number) => ({ 
  type: SET_PAGE,
  payload: page
});

export const setStatus = (status: '' | 'loading' | 'error') => ({
  type: SET_STATUS,
  payload: status
})

export const fetchList = (chars: any) => ({ 
  type: FETCH_LIST,
  payload: chars
});

// Action types
type ListAction = 
  | ReturnType<typeof setPage>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof fetchList>

// Initial state
type ListState = {
  page: number;
  status: '' | 'loading' | 'error';
  characters: Array<any>
}

const initialState: ListState = {
  page: 1,
  status: '',
  characters: []
}

// Reducer
function ListReducer(state: any = initialState, action: ListAction) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    case FETCH_LIST:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
}

export default ListReducer