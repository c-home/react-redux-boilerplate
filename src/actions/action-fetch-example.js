
/*
Endpoint in server.js
Uses thunk middleware
Corresponds with reducer-fetch-example.js
*/

export const fetchExampleAction = () => {
   return dispatch => {
      dispatch({type: "FETCH_EXAMPLE_PENDING"});
      return fetch('/api/example', {
         method: "GET",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
         .then(response => response.json())
         .then(json => dispatch({type: "FETCH_EXAMPLE_FULFILLED", payload: json}))
         .catch(error => dispatch({type: "FETCH_EXAMPLE_REJECTED", payload: error}))
   }
}
