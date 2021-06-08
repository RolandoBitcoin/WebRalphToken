var initialState = false
const SET_PRICES = "SET_PRICES";


export const setPrices = prices => ({
    type: SET_PRICES,
    payload: prices
})

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICES:
            state = action.payload;
            return state
        default:
            return state
    }
}