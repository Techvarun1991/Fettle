export const viewlogin = (item) => {
    return {
        type: "view",
        payload: item
    }
}

export const LOGOUT = (item) => {
    return {
        type: "logout",
        payload: item
    }
}

export const ADD = (item) => {
    console.log(item);
    return {
        type: "ADD_CART",
        payload: item
    }
};

export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
};

export const RMV = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
};

