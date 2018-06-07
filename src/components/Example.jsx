import React, { Component } from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchExampleAction} from '~/actions/action-fetch-example';
import {normalExampleAction} from '~/actions/action-normal-example';


class Example extends Component {

   renderTrueFalse(value) {
      return value ? "true" : "false";
   }

   render() {
      var { fetchExample, normalExample } = this.props;
      return (
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <h1>React.js boilerplate</h1>

                  <h2>React router</h2>
                  <p>
                     This is from the Example component. The "App" component renders the "Routes".
                     If I put text under the Routes in App for example, it would show up at the bottom of this page.
                  </p>

                  <h2>Resources</h2>
                  <ul>
                     <li><a href="https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a">React redux tutorial</a></li>
                     <li><a href="https://reacttraining.com/react-router/web/example/basic">Router docs</a></li>
                  </ul>

                  <h2>Redux Example</h2>
                  <p>Just to demonstrate redux working with apis and the server... (open the console!)</p>
                  <button onClick={() => this.props.fetchExampleAction()}>Action fired when I am clicked!</button>
                  <hr />
                  <ul>
                     <li>Fetching: {this.renderTrueFalse(fetchExample.fetching)}</li>
                     <li>Fetched: {this.renderTrueFalse(fetchExample.fetched)}</li>
                     <li>Message: <b>{fetchExample.message.m}</b></li>
                     <li>Error: {this.renderTrueFalse(fetchExample.error)}</li>
                  </ul>
                  <hr />
                  <p>
                     Button onclick the action is fired. "action-fetch-example" uses fetch to call "/api/example/".
                     It dispatches actions which are sent to the reducer which update the store. Actions can indicate the progress of the api call.
                     As the store is updated from the reducers the relevant sections (eg fetching, message..) are updated in this component.
                  </p>
               </div>
            </div>
         </div>
      );
   }
}



// Recieving from the store
function mapStateToProps(state) {
   return {
      normalExample: state.normalExample,
      fetchExample: state.fetchExample
   };
}

// This is to connect the action with this component
function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      fetchExampleAction: fetchExampleAction,
      normalExampleAction: normalExampleAction
   }, dispatch);
}

// Connecting it all together
export default connect(mapStateToProps, matchDispatchToProps)(Example);
