const initialState = {
    menu_active : false
}

const controlReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'MENU_OPEN': {
            return {
                ...state,
                menu_active : true
            }
        }

        case 'MENU_CLOSED' : {
            return {
                ...state,
                menu_active : false
            }
        }

        default:
            return state
    }
}

export default controlReducer