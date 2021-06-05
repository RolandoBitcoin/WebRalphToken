var initialState = false
const SET_SOCKET = "SET_SOCKET";


export const setSocket = socket => ({
    type: SET_SOCKET,
    payload: socket
})

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SOCKET:
            state = action.payload;
            return state
        default:
            return state
    }
}