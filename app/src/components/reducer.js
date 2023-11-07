const greyish = "#ebeeec"
const white = "#ffffff"
const green = "#203A43"

export const INITAL_STATE = {
    darkMode: false,
    textColor: green,
    paneColor: greyish,
    bgColor: white
}


export const reducer = (state, action)=>{
    switch(action.type){
        case "LightMode":
            return{
                state
            }
        case "DarkMode":
            return{
                ...state,
                darkMode: !state.darkMode,
                textColor: white,
                paneColor: green,
            }
        default:
            return{
                state
            }
    }
}