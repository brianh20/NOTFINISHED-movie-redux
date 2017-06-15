export function loadChars(chars) {
    console.log('fire action with ', chars);
    return {
        type: "LOAD_CHARS",
        payload: chars
    };
}