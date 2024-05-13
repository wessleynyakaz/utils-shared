import { useReducer } from 'react'

export interface State {
    email: string
    password: string
    isSubmitting: boolean
    isLoading: boolean
    hasError: boolean
}

type Action =
    | { type: 'SET_EMAIL' ;email: string }
    | { type: 'SET_PASSWORD'; password: string }
    | { type: 'SUBMITTING' }
    | { type: 'SUBMIT_SUCCESS' }
    | { type: 'SUBMIT_ERROR' }

const initialState: State = {
    email: '',
    password: '',
    isSubmitting: false,
    isLoading: false,
    hasError: false,
}

const loginReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.email }
        case 'SET_PASSWORD':
            return { ...state, password: action.password }
        case 'SUBMITTING':
            return { ...state, isSubmitting: true, hasError: false }
        case 'SUBMIT_SUCCESS':
            return { ...state, isSubmitting: false, isLoading: true }
        case 'SUBMIT_ERROR':
            return { ...state, isSubmitting: false, hasError: true }
        default:
            return state
    }
}

const useLogin = ()=>{
    const [state, dispatch] = useReducer(loginReducer, initialState)

    return { state, dispatch }
}

export default useLogin
