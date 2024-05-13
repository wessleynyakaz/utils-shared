import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useReducer } from 'react'

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

const useLogin = (callbackUrl:string )=>{
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const router = useRouter()
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        dispatch({ type: 'SUBMITTING' })
        try {
            const resp = await signIn('credentials', {
                ...state,
                redirect: false,
            })
            if (resp?.error) {
                dispatch({ type: 'SUBMIT_ERROR' })
            } else {
                // TODO: welcome user using audio
                dispatch({ type: 'SUBMIT_SUCCESS' })
                setTimeout(() => {
                    router.push(callbackUrl)
                }, 1000)
            }
        } catch (error) {
            // Handle any potential errors from the authentication process
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        let typ: 'SET_EMAIL' | 'SET_PASSWORD' = 'SET_' + name.toUpperCase() as 'SET_EMAIL' | 'SET_PASSWORD'

        if (typ === 'SET_EMAIL') {
            dispatch({ type: typ, email: value })
        } else if (typ === 'SET_PASSWORD') {
            dispatch({ type: typ, password: value })
        }
    }
    return { state, handleChange, handleSubmit }
}

export default useLogin
