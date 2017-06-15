export function logUser() {
    return {
        type: "LOG"
    };
}

export function logoffUser() {
    return {
        type: "UNLOG"
    };
}

export function changeUser(name) {
    return {
        type: "CHANGE_USER",
        payload: name
    };
}