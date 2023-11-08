import bgDark from "../misc/bgDark.jpg"
const greyish = "#ebeeec"
const white = "#ffffff"
const green = "#203A43"

export const intitalState = {
    darkMode: false,
    textColor: green,
    paneColor: greyish,
    bgColor: white,
    bgImage: ""
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "LightMode":
            return {
                darkMode: false,
                textColor: green,
                paneColor: greyish,
                bgColor: white,
                bgImage: ""
            }
        case "DarkMode":
            return {
                darkMode: true,
                textColor: white,
                paneColor: green,
                bgColor: "black",
                bgImage: bgDark
            }
        default:
            return state;
    }
}