import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from '../reducers/rootReducer'
import {logger} from '../middlewares/logger'
import {freezeState} from '../middlewares/freezeState'
import thunk from 'redux-thunk'

/**
 * Create a store that has:
 * - the root reducer
 * - an undefined initial state
 * - middlewares + chrome redux extension working
 *  (https://github.com/zalmoxisus/redux-devtools-extension)
 * @type {Store<any>}
 */
export const store = createStore(rootReducer, undefined)
