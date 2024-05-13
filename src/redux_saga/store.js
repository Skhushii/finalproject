import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core'
import RootReducer from './rootreduser';
import { SagaIndex } from '../redux_saga/Admin_saga/Saga/index';
import { voteSaga } from './User_saga/Saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const SagaMiddleware = createSagaMiddleware()
``
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
)
SagaMiddleware.run(SagaIndex);
SagaMiddleware.run(voteSaga);

export default store;