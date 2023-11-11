export const intitalState = {
    darkMode: false
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "LightMode":
            return {
                darkMode: false
            }
        case "DarkMode":
            return {
                darkMode: true

            }
        default:
            return state;
    }
}