var initialState = false;
const SET_LOCATION = "SET_LOCATION";
export const setLocation = location => ({
    type: SET_LOCATION,
    payload: location
})
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            state = action.payload;
            return state
        default:
            return state
    }
}