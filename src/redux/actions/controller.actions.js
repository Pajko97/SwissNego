

export const openMenu = data => dispatch => {
    dispatch({
        type: "MENU_OPEN"
    })
}

export const closeMenu = data => dispatch => {
    dispatch({
        type: "MENU_CLOSED"
    })
}