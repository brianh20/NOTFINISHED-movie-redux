export function loadCharacters(characters) {
    return {
        type: "LOAD_CHARACTERS",
        payload: characters
    };
}