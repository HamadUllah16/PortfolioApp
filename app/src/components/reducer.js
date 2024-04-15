export const intitalState = {
    darkMode: true,
    textColor: "lightText",
    bgColor: "bgDarkBox",
    border: "border border-dark"
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ToggleDarkMode":
            return {
                ...state,
                darkMode: !state.darkMode,
                textColor: state.darkMode ? "darkText" : "lightText",
                bgColor: state.darkMode ? "bg-light" : "bgDarkBox",
                border: state.darkMode ? "border" : "border border-dark"

            }
        default:
            return state;
    }
}