import { useReducer } from 'react'
import { RATING_TYPE, LANG_TYPE } from 'config/searchConfig'

export const useForm = () => {
    const ACTIONS = {
        UPDATE_KEYWORD: 'update_keyword',
        UPDATE_RATING: 'update-rating',
        UPDATE_LANGUAGE: 'update-language'
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
            case ACTIONS.UPDATE_LANGUAGE:
                return {
                    ...state,
                    lang: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        keyword: "",
        rating: RATING_TYPE[0],
        lang: LANG_TYPE[0]
    })

    const { keyword, rating, lang } = state

    return {
        keyword,
        rating,
        lang,
        updateKeyword: keyword => dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateLanguage: lang => dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: lang})
    }
}