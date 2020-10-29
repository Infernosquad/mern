export const START_LOADER = 'START_LOADER'
export const END_LOADER = 'END_LOADER'

export const startLoading = function() {
    return {
        type: START_LOADER,
    };
}

export const endLoading = function(error = null) {
    return {
        type: END_LOADER,
        payload: error
    };
}
