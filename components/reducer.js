
const INITIAL_STATE = {
    started: false,
    stopped: true,
};

const recordingStatus = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export {
    recordingStatus
}
