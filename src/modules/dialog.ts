// Action types - with const assertions
const SET_DIALOG = 'list/SET_DIALOG' as const;

// Actions
export const setDialog = (text: string) => ({
  type: SET_DIALOG,
  payload: text,
});

// Action object types
type DialogAction = ReturnType<typeof setDialog>;

// Initial state
type DialogState = {
  text: string;
};

const initialState: DialogState = {
  text: '',
};

// Reducer
function DialogReducer(
  state: DialogState = initialState,
  action: DialogAction
) {
  switch (action.type) {
    case SET_DIALOG:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export default DialogReducer;
