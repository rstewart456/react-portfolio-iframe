import { GET_PROJECTS } from '../actions/types'

const initialState = {
    project: [],
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_PROJECTS:
            return {
                ...state,
                project: payload
            }
        default:
            return state
    }
}