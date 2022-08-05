export const userAdd = user => {
    return {
        type: "userAdd",
        payload: user,
    }
}

export const userRemove = user => {
    return {
        type: "userRemove",
        payload: user,
    }
}

export const SetPage = payload => {
    return {
        type: "setPage",
        payload: payload,
    }
}

