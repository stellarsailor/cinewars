import { CharacterProfile } from "../types/CharacterProfile";

// Action types - with const assertions
const SET_PAGE = 'list/SET_PAGE' as const;
const SET_CHARACTERS = 'list/SET_CHARACTERS' as const;

// Actions
export const setPage = (page: number) => ({ 
  type: SET_PAGE,
  payload: page
});

export const setCharacters = (characters: Array<CharacterProfile>) => ({ 
  type: SET_CHARACTERS,
  payload: characters
});

// Action object types
type ListAction = 
  | ReturnType<typeof setPage>
  | ReturnType<typeof setCharacters>

// Initial state
type ListState = {
  page: number;
  characters: Array<any>
}

const initialState: ListState = {
  page: 1,
  characters: []
}

// Reducer
function ListReducer(state: ListState = initialState, action: ListAction) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
}

export default ListReducer