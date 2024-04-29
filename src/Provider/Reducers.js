import { UPDATE_MOVIES_DETAILS } from "./Actions";

export const initialValue = {
    moviesDetails: null,
    ticketBooking: null
}
export const reducer = (state, action) => {
    switch (action?.type) {
        case UPDATE_MOVIES_DETAILS:
            return { ...state, moviesDetails: action?.payload }
        default:
            return state
    }
}
