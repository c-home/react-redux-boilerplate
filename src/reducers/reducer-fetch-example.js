
/*
Reducer corresponds with action-fetch-example.js
*/

const initialState = {
   fetching: false,
   fetched: false,
   message: "",
   error: false
}

const fetchExampleReducer = (state=initialState, action) => {
   switch (action.type) {
      case "FETCH_EXAMPLE_PENDING": {
         return Object.assign({}, state, {fetching: true});
         break;
      }
      case "FETCH_EXAMPLE_REJECTED": {
         return Object.assign({}, state, {
            fetching: false,
            error: true
         });
         break;
      }
      case "FETCH_EXAMPLE_FULFILLED": {
         return Object.assign({}, state, {
            fetching: false,
            fetched: true,
            message: action.payload
         });
         break;
      }
   }
   return state;
}

export default fetchExampleReducer;
