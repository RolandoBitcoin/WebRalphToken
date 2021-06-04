import in8 from '../../../Helpers/in8.json'
var userLang = navigator.language || navigator.userLanguage;
var initialState = {
    in8: userLang ? userLang === "es-ES" ? "es" : "en" : "en",
    locale: in8[userLang ? userLang === "es-ES" ? "es" : "en" : "en"]
};
const SET_LOCALE = "SET_LOCALE";


export const setLocale = bloean => ({
    type: SET_LOCALE,
    payload: bloean
})

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCALE:
            state = { in8: action.payload, locale: in8[action.payload] };
            return state
        default:
            return state
    }
}