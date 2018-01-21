import createActionCreator from 'utils/redux';

const TOGGLE_DIALOG = 'TOGGLE_DIALOG';

export const initialState = {
  dialog: {
    show: false,
    component: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG: return {
      ...state,
      dialog: {
        show: !!action.payload,
        component: action.payload || null,
      },
    };
    default: return state;
  }
};

export const toggleDialog = createActionCreator(TOGGLE_DIALOG);
