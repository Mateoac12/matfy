import { useReducer } from 'react'
import { RATING_TYPE } from 'config/searchConfig'

export const useForm = () => {
    const ACTIONS = {
        UPDATE_KEYWORD: 'update_keyword',
        UPDATE_RATING: 'update-rating'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.UPDATE_KEYWORD:
                return {
                    ...state,
                    keyword: action.payload,
                }
            case ACTIONS.UPDATE_RATING:
                return {
                    ...state,
                    rating: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        keyword: "",
        rating: RATING_TYPE[0]
    })

    const { keyword, rating } = state

    return {
        keyword,
        rating,
        updateKeyword: keyword => dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
    }
}