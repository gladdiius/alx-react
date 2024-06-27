import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Replace with your root reducer file

// Create the Redux store with thunk middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Render your App component with the Redux Provider wrapping it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
