import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { 
    blogpostListReducer,
    blogpostCategoryListReducer, 
    blogpostDetailsReducer, 
    blogpostDeleteReducer,
    blogpostCreateReducer,
    blogpostUpdateReducer,
 } from './reducers/blogpostReducers';

import {
    userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'


const reducer = combineReducers({
    blogpostList: blogpostListReducer,
    blogpostCategoryList: blogpostCategoryListReducer,
    blogpostDetails: blogpostDetailsReducer,
    blogpostDelete: blogpostDeleteReducer,
    blogpostCreate: blogpostCreateReducer,
    blogpostUpdate: blogpostUpdateReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;