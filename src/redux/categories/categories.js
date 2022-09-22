// Actions for categories
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

// Reducer
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

// Actions creators
export const checkStatus = (category) => ({ type: CHECK_STATUS, category });
export default categoriesReducer;
