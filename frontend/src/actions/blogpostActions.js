import axios from 'axios'
import { 
    BLOGPOST_LIST_REQUEST,
    BLOGPOST_LIST_SUCCESS,
    BLOGPOST_LIST_FAIL,
    BLOGPOST_DETAILS_REQUEST,
    BLOGPOST_DETAILS_SUCCESS,
    BLOGPOST_DETAILS_FAIL,
    BLOGPOST_DELETE_REQUEST,
    BLOGPOST_DELETE_SUCCESS,
    BLOGPOST_DELETE_FAIL,
    BLOGPOST_CREATE_REQUEST,
    BLOGPOST_CREATE_SUCCESS,
    BLOGPOST_CREATE_FAIL,
    BLOGPOST_UPDATE_REQUEST,
    BLOGPOST_UPDATE_SUCCESS,
    BLOGPOST_UPDATE_FAIL,
    BLOGPOST_CATEGORY_LIST_REQUEST,
    BLOGPOST_CATEGORY_LIST_SUCCESS,
    BLOGPOST_CATEGORY_LIST_FAIL  
} from '../constants/productConstants'

import { logout } from './userActions'

export const listBlogpost = ({ title = '', category = '' }) => async (dispatch) => {
    try {
        dispatch({ type: BLOGPOST_LIST_REQUEST })

        const { data } = await axios.get(`/api/products?title=${title}&category=${category}`)

        dispatch({
            type: BLOGPOST_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BLOGPOST_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listBlogpostCategories = () => async (dispatch) => {
    try {
        dispatch({ type: BLOGPOST_CATEGORY_LIST_REQUEST })

        const { data } = await axios.get(`/api/blogposts/categories`)

        dispatch({
            type: BLOGPOST_CATEGORY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BLOGPOST_CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listBlogpostDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BLOGPOST_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/blogposts/${id}`)

        dispatch({ 
            type: BLOGPOST_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BLOGPOST_DETAILS_FAIL,
            payload: error.response && error.response.data.messgae ? error.response.data.message : error.message,
        })
    }
}

export const deleteBlogpost = (id) => async (dispatch) => {
    try {
        dispatch({
            type: BLOGPOST_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/blogposts/${id}`, config)

        dispatch({
            type: BLOGPOST_DELETE_SUCCESS
        })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: BLOGPOST_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createBlogpost = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BLOGPOST_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/blogposts`, {}, config)

        dispatch({
            type: BLOGPOST_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not Authorized, token failerd') {
            dispatch(logout())
        }

        dispatch({
            type: BLOGPOST_CREATE_FAIL,
            payload: message,
        })
    }
}

export const updateBlogpost = (blogpost) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BLOGPOST_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/blogposts/${blogpost._id}`,
        blogpost,
        config
      )
  
      dispatch({
        type: BLOGPOST_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: BLOGPOST_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: BLOGPOST_UPDATE_FAIL,
        payload: message,
      })
    }
  }