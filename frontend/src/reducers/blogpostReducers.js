import { 
    BLOGPOST_LIST_REQUEST, BLOGPOST_LIST_SUCCESS, BLOGPOST_LIST_FAIL,
    BLOGPOST_DETAILS_REQUEST,
    BLOGPOST_DETAILS_SUCCESS,
    BLOGPOST_DETAILS_FAIL,
    BLOGPOST_DELETE_REQUEST,
    BLOGPOST_DELETE_SUCCESS,
    BLOGPOST_DELETE_FAIL,
    BLOGPOST_CREATE_REQUEST,
    BLOGPOST_CREATE_SUCCESS,
    BLOGPOST_CREATE_FAIL,
    BLOGPOST_CREATE_RESET,
    BLOGPOST_UPDATE_REQUEST,
    BLOGPOST_UPDATE_SUCCESS,
    BLOGPOST_UPDATE_FAIL,
    BLOGPOST_UPDATE_RESET,
    BLOGPOST_CATEGORY_LIST_REQUEST,
    BLOGPOST_CATEGORY_LIST_SUCCESS,
    BLOGPOST_CATEGORY_LIST_FAIL,

} from '../constants/productConstants';

export const blogpostListReducer = (state = { blogpost: [] }, action) => {
    switch (action.type) {
        case BLOGPOST_LIST_REQUEST:
            return { loading: true, blogposts: [] }
        case BLOGPOST_LIST_SUCCESS:
            return { loading: false, blogposts: action.payload }
        case BLOGPOST_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const blogpostCategoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case BLOGPOST_CATEGORY_LIST_REQUEST:
            return { loading: true }
        case BLOGPOST_CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload}
        case BLOGPOST_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
};

export const blogpostDetailsReducer = (state = { blogpost: {} }, action) => {
    switch (action.type) {
        case BLOGPOST_DETAILS_REQUEST:
            return { loading: true, ...state }
        case BLOGPOST_DETAILS_SUCCESS:
            return { loading: false, blogpost: action.payload }
        case BLOGPOST_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
};

export const blogpostDeleteReducer = (state = { blogpost: {} }, action) => {
    switch(action.type) {
        case BLOGPOST_DELETE_REQUEST:
            return { loading: true }
        case BLOGPOST_DELETE_SUCCESS:
            return { loading: false, success: true }
        case BLOGPOST_DELETE_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
};

export const blogpostCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case BLOGPOST_CREATE_REQUEST:
            return { loading: true }
        case BLOGPOST_CREATE_SUCCESS:
            return { loading: false, success: true, blogpost: action.payload }
        case BLOGPOST_CREATE_FAIL:
            return { loading: false, error: action.payload}
        case BLOGPOST_CREATE_RESET:
            return {}
        default:
            return state
    }
};

export const blogpostUpdateReducer = (state = { blogpost: {} }, action) => {
    switch (action.type) {
      case BLOGPOST_UPDATE_REQUEST:
        return { loading: true }
      case BLOGPOST_UPDATE_SUCCESS:
        return { loading: false, success: true, blogpost: action.payload }
      case BLOGPOST_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case BLOGPOST_UPDATE_RESET:
        return { blogpost: {} }
      default:
        return state
    }
  };