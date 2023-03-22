
const initial = {
    logininfo: {},
}

export const viewreducer = (state = initial, action) => {
    if (action.type == "view") {
        return { logininfo: action.payload }
    }
    else if (action.type == "logout") {
        return { logininfo: '' }
    }
    else {
        return state;
    }
}

