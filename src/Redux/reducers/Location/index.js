import axios from 'axios';
var initialState = false
axios.get("http://www.geoplugin.net/json.gp").then((r) => setLocation(r.data))
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